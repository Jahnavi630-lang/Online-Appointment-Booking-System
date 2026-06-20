import { useState, useEffect } from "react";
import axios from "axios";

function ManageSlots() {

  const [slot, setSlot] =
    useState("");

  const [slots, setSlots] =
    useState([]);

  const serviceId =
    "6a3555c4c4cb59795c05d678";

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots =
    async () => {
      try {

        const response =
          await axios.get(
            "https://online-appointment-booking-system-7338.onrender.com/api/services/all"
          );

        const service =
          response.data.find(
            (s) =>
              s._id === serviceId
          );

        if (service) {
          setSlots(
            service.availableSlots
          );
        }

      } catch (error) {
        console.log(error);
      }
    };

  const addSlot = () => {

    if (!slot) {
      alert(
        "Enter a Slot"
      );
      return;
    }

    setSlots([
      ...slots,
      slot
    ]);

    setSlot("");
  };

  const deleteSlot =
    (index) => {

      const updatedSlots =
        slots.filter(
          (_, i) =>
            i !== index
        );

      setSlots(
        updatedSlots
      );
    };

  const saveSlots =
    async () => {
      try {

        await axios.put(
          `https://online-appointment-booking-system-7338.onrender.com/api/services/slots/${serviceId}`,
          {
            availableSlots:
              slots
          }
        );

        alert(
          "Slots Saved Successfully"
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
        Manage Slots
      </h1>

      <input
        type="text"
        placeholder="10:00 AM"
        value={slot}
        onChange={(e) =>
          setSlot(e.target.value)
        }
      />

      <button
        onClick={addSlot}
      >
        Add Slot
      </button>

      <button
        onClick={saveSlots}
      >
        Save Slots
      </button>

      <hr />

      {slots.map(
        (s, index) => (
          <div
            key={index}
          >
            <p>{s}</p>

            <button
              onClick={() =>
                deleteSlot(
                  index
                )
              }
            >
              Delete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default ManageSlots;