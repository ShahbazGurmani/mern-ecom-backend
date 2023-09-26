import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./config/db.js";
import authRoutes from "./routes/authRouter.js";
import cors from "cors";

//config dotenv
dotenv.config();

//config db
dbConnection();

//rest object for craeting api's
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//api's
app.get("/", (req, resp) => {
  resp.send({ result: "working" });
});

//port

const PORT = process.env.PORT || 4500;
// run listen
app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode On port ${PORT}`.bgCyan
      .white
  );
});
