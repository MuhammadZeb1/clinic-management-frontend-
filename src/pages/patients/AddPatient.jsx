import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../../features/patient/patientSlice";
import { useNavigate } from "react-router-dom";

export default function AddPatient() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(addPatient(form));

    if (res.payload) {
      navigate("/patients");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Add Patient
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Name"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Age"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <input
          placeholder="Gender"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, gender: e.target.value })
          }
        />

        <input
          placeholder="Contact"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, contact: e.target.value })
          }
        />

        <button className="bg-green-600 text-white px-4 py-2">
          Save Patient
        </button>
      </form>
    </div>
  );
}