const express = require("express");

const router =
express.Router();

const {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus
} =
require(
"../controllers/appointmentController"
);
router.post(
  "/book",
  bookAppointment
);

router.get(
  "/all",
  getAppointments
);
router.put(
  "/status/:id",
  updateAppointmentStatus
);

module.exports = router;