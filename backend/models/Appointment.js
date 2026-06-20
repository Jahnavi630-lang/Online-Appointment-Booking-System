const mongoose = require("mongoose");

const appointmentSchema =
mongoose.Schema(
{
  customer: {
    type:
    mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  service: {
    type:
    mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },

  date: {
    type: String
  },

  time: {
    type: String
  },

  status: {
    type: String,
    enum: [
      "Pending",
      "Approved",
      "Rejected",
      "Completed"
    ],
    default: "Pending"
  }
});

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);