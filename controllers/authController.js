import userModel from "../models/userModel.js";
import { hashPassword } from "./../helpers/authHelper.js";
export const registerController = async (req, resp) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return resp.send({ error: "name is required" });
    }
    if (!email) {
      return resp.send({ error: "email is required" });
    }
    if (!password) {
      return resp.send({ error: "password is required" });
    }
    if (!phone) {
      return resp.send({ error: "phone is required" });
    }
    if (!address) {
      return resp.send({ error: "address is required" });
    }

    //if user is already exist
    const existUser = await userModel.findOne({ email });
    //then
    if (existUser) {
      return resp.status(200).send({
        success: true,
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
