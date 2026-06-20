import { useState } from "react";

function BookAppointment() {

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const bookAppointment = () => {

    if (!date || !time) {
      alert(
        "Please select date and time"
      );
      return;
    }

    const today =
      new Date()
      .toISOString()
      .split("T")[0];

    if (date < today) {
      alert(
        "Please select a future date"
      );
      return;
    }

    alert(
      "Appointment Booked Successfully"
    );

  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        Book Appointment
      </h1>

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <br /><br />

      <input
        type="time"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={bookAppointment}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default BookAppointment;