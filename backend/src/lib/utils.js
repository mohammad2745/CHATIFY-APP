import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign({ userId: userId }, JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "development" ? false : true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};
