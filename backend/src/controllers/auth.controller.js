import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import cloudinary from "../lib/cloudinary.js";
import { ENV } from "../lib/env.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
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

      try {
        await sendWelcomeEmail(newUser.email, newUser.fullname, ENV.CLIENT_URL);
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

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    generateToken(user._id, res);

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
};

export const logout = async (_, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out successfully." });
};

export const updateProfile = async (req, res) => {
  const { profilePic } = req.body;

  try {
    if (!profilePic) {
      return res.status(400).json({ Message: "Profile pic is required." });
    }

    const userId = req.user._id;

    const uploadResponse = await cloudinary.uploader.upload(profilePic, {
      public_id: userId,
      overwrite: true,
    });

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadResponse.secure_url,
      },
      { new: true },
    );

    if (updatedUser) {
      res.status(200).json({ user: updatedUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
};
