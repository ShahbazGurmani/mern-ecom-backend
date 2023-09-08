import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected route's on token base
export const requireSignin = async (req, resp, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_TOKEN);
    req.user = decode;
    next();
  } catch (err) {
    resp.send(err);
  }
};

export const isAdmin = async (req, resp, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.role !== 1) {
      return resp.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    resp.status(401).send({
      success: false,
      error,
      message: "error in isAdmin middelwear",
    });
  }
};
