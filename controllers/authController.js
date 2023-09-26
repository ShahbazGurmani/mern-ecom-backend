import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, resp) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return resp.send({ message: "name is required" });
    }
    if (!email) {
      return resp.send({ message: "email is required" });
    }
    if (!password) {
      return resp.send({ message: "password is required" });
    }
    if (!phone) {
      return resp.send({ message: "phone is required" });
    }
    if (!address) {
      return resp.send({ message: "address is required" });
    }

    //if user is already exist
    const existUser = await userModel.findOne({ email });
    //then
    if (existUser) {
      return resp.status(200).send({
        success: false,
        message: "Already register please login",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    resp.status(201).send({
      success: true,
      message: "User Resgister Successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    resp.status(500).send({
      success: false,
      message: "Error in registration",
      err,
    });
  }
};

//login controller

export const loginController = async (req, resp) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return resp.status(404).send({
        success: false,
        message: "Invalid Email Or Password",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return resp.status(404).send({
        success: false,
        message: "Email is not register",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return resp.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "7d",
    });

    resp.status(200).send({
      success: true,
      message: "User Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

// for test middle wear
export const testController = async (req, resp) => {
  resp.send("protected");
};
