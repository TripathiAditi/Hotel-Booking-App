import mongoose from "mongoose";

mongoose.set("bufferCommands", false); // 🔥 must be FIRST
mongoose.set("strictQuery", true);

export default mongoose;
