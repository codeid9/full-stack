import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDb = async (uri) => {
  try {
    const url = `${uri}/${DB_NAME}`;
    const connection = await mongoose.connect(url);
    console.log("MongoDB Connect:)", connection.connection.host);
    return connection;
  } catch (error) {
    console.error("MongoDb connection FAILED!!", error.message);
    throw error;
  }
};

export default connectDb;
