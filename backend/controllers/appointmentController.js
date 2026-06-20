const Appointment =
require("../models/Appointment");

const bookAppointment =
async (req, res) => {
  try {

    const {
      customer,
      service,
      date,
      time
    } = req.body;

    if (
      !customer ||
      !service ||
      !date ||
      !time
    ) {
      return res.status(400).json({
        message:
        "All fields are required"
      });
    }

    const existingAppointment =
      await Appointment.findOne({
        service,
        date,
        time
      });

    if (existingAppointment) {
      return res.status(400).json({
        message:
        "Slot Already Booked"
      });
    }

    const appointment =
      await Appointment.create({
        customer,
        service,
        date,
        time
      });

    res.status(201).json(
      appointment
    );

  } catch (error) {
    res.status(500).json({
      message:
      error.message
    });
  }
};

const getAppointments =
async (req, res) => {
  try {

    const appointments =
      await Appointment.find()
      .populate("customer")
      .populate("service");

    res.json(appointments);

  } catch (error) {
    res.status(500).json({
      message:
      error.message
    });
  }
};
const updateAppointmentStatus =
async (req, res) => {
  try {

    const appointment =
      await Appointment.findById(
        req.params.id
      );

    if (!appointment) {
      return res.status(404).json({
        message:
        "Appointment Not Found"
      });
    }

    appointment.status =
      req.body.status;

    await appointment.save();

    res.json(appointment);

  } catch (error) {
    res.status(500).json({
      message:
      error.message
    });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus
};