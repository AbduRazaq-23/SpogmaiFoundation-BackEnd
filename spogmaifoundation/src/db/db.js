import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
    console.log(connect);
  } catch (error) {
    console.log("dataBase error");
  }
};

export { connectDB };
