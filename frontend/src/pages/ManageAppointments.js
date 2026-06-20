import { useEffect, useState } from "react";
import axios from "axios";

function ManageAppointments() {
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments =
    async () => {
      try {
        const response =
          await axios.get(
            "https://online-appointment-booking-system-7338.onrender.com/api/appointments/all"
          );

        setAppointments(
          response.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const updateStatus =
    async (id, status) => {
      try {

        await axios.put(
          `https://online-appointment-booking-system-7338.onrender.com/api/appointments/status/${id}`,
          {
            status
          }
        );

        fetchAppointments();

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        Manage Appointments
      </h1>

      {appointments.map(
        (appointment) => (
          <div
            key={appointment._id}
            style={{
              border:
                "1px solid black",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>
              {
                appointment.customer
                  ?.name
              }
            </h3>

            <p>
              Status:
              {
                appointment.status
              }
            </p>

            <button
              onClick={() =>
                updateStatus(
                  appointment._id,
                  "Approved"
                )
              }
            >
              Approve
            </button>

            <button
              onClick={() =>
                updateStatus(
                  appointment._id,
                  "Rejected"
                )
              }
            >
              Reject
            </button>

            <button
              onClick={() =>
                updateStatus(
                  appointment._id,
                  "Completed"
                )
              }
            >
              Complete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default ManageAppointments;