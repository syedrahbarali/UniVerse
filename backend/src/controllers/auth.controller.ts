import { NextFunction, Request, Response } from "express";
import User from "../models/user.model.js";
import generateAccessToken from "../utils/generateAccessRefreshToken.js";

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (email.trim() === "" && password === "") {
      return res
        .status(400)
        .json({ message: "Email and password is required" });
    }

    // finding user
    const user = await User.find({ email }).select("-password").select("-role");

    // User not found
    if (!user.length) {
      console.log("user not found");
      return res.status(400).json({ message: "User not found" });
    }

    const accessToken = generateAccessToken({
      _id: user[0]._id.toString(),
      name: user[0].name,
      email: user[0].email,
    });

    if (accessToken) {
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: "Login success",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createAccount = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name, email, password } = req.body;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return res.status(500).json({
        message: "All fields are required.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User Already Exist.");
      return res.status(400).json({
        message: "User already exist",
      });
    }

    // creating new user
    let newUser = new User({ name, email, password });

    // saving user details in DB
    newUser = await newUser.save();

    const createdUser = await User.findOne({ email });

    if (createdUser) {
      console.log("User is created");
      return res.status(200).json({
        user: createdUser,
        message: "User created successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
