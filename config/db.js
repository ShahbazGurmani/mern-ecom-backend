//connection mongo db;
import mongoose from "mongoose";

import color from "colors";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongo db ${conn.connection.host}`.bgGreen.white);
  } catch (err) {
    console.log(`error in mongobd  connection ${err}`.bgRed.white);
  }
};

export default dbConnection;
