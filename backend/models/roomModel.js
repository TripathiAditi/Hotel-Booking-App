import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    roomType: {
      type: String,
      enum: ["Single", "Double", "Deluxe", "Suite"],
      required: true
    },

    pricePerNight: {
      type: Number,
      required: true
    },

    capacity: {
      type: Number,
      required: true
    },

    amenities: {
      type: [String],
      default: []
    },
    image_url:{
      type: String,

    },

    status: {
      type: String,
      enum: ["Available", "Booked", "Maintenance"],
      default: "Available"
    }
  },
  { timestamps: true }
);

export const room = mongoose.model("Room", roomSchema);
