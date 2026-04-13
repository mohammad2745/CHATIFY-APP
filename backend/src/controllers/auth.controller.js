import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const authController = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "Please fill all the fields." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address." });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      await newUser.save();
      generateToken(newUser._id, res);

      res.status(201).json({ user: newUser });
      console.log(
        `Email sent to ${newUser.email} name ${newUser.fullname} client url ${process.env.CLIENT_URL}`,
      );
      try {
        await sendWelcomeEmail(
          newUser.email,
          newUser.fullname,
          process.env.CLIENT_URL,
        );
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
};
