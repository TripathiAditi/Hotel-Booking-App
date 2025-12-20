import mongoose from "./mongoose.js";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};

export default connectDB;
