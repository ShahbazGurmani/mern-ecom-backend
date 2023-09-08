import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignin, isAdmin } from "../middelwears/authMiddelwear.js";
//router
const router = express.Router();

//routing
//resgistration || Post method
router.post("/register", registerController);

//for login || Post
router.post("/login", loginController);

//test route
router.get("/test", requireSignin, isAdmin, testController);

export default router;
