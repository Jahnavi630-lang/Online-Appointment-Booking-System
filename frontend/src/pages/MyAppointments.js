import { useEffect, useState } from "react";
import axios from "axios";

function MyAppointments() {

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

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        My Appointments
      </h1>

      {
        appointments.map(
          (appointment) => (
            <div
              key={appointment._id}
              style={{
                border:
                  "1px solid black",
                padding: "10px",
                margin: "10px"
              }}
            >
              <h3>
                {
                  appointment
                  .service
                  ?.serviceName
                }
              </h3>

              <p>
                Customer:
                {
                  appointment
                  .customer
                  ?.name
                }
              </p>

              <p>
                Date:
                {
                  appointment.date
                }
              </p>

              <p>
                Time:
                {
                  appointment.time
                }
              </p>

              <p>
                Status:
                {
                  appointment.status
                }
              </p>
            </div>
          )
        )
      }
    </div>
  );
}

export default MyAppointments;