const mongoose = require("mongoose");

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

    status: {
      type: String,
      enum: ["Available", "Booked", "Maintenance"],
      default: "Available"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
