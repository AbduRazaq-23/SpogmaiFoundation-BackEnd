import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.DB_URL}`);
    console.log(`\nMongoDB connected !! DB HOST `);
  } catch (error) {
    console.log("dataBase error");
    process.exit(1);
  }
};

export { connectDB };
