import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true
    },

    checkInDate: {
      type: Date,
      required: true
    },

    checkOutDate: {
      type: Date,
      required: true
    },

    totalAmount: {
      type: Number,
      required: true
    },

    bookingStatus: {
      type: String,
      enum: ["Confirmed", "Cancelled", "Completed"],
      default: "Confirmed"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
