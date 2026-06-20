const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  description: {
    type: String
  },

  availableSlots: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model(
  "Service",
  serviceSchema
);