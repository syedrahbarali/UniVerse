import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables"
      );
    }
    return await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
