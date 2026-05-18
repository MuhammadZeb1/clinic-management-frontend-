import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../features/appointment/appointmentSlice";

export default function BookAppointment() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    patientId: "",
    doctorId: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addAppointment(form));
    alert("Appointment Booked!");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Book Appointment
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Patient ID"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, patientId: e.target.value })
          }
        />

        <input
          placeholder="Doctor ID"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, doctorId: e.target.value })
          }
        />

        <input
          type="date"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <button className="bg-blue-600 text-white px-4 py-2">
          Book
        </button>
      </form>
    </div>
  );
}