import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true
    },

    quantity: {
      type: Number,
      default: 1
    },

    status: {
      type: String,
      enum: ["Requested", "In Progress", "Completed", "Cancelled"],
      default: "Requested"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);
