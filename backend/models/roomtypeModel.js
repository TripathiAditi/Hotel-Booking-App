import mongoose from "mongoose";

const roomTypeSchema = new mongoose.Schema(
  {
    typeName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    description: {
      type: String
    },

    basePrice: {
      type: Number,
      required: true
    },

    maxCapacity: {
      type: Number,
      required: true
    },

    amenities: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const RoomType = mongoose.models.RoomType || mongoose.model("RoomType", roomTypeSchema);
export default RoomType; 
