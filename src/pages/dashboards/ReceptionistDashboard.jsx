import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../../features/patient/patientSlice";

export default function ReceptionistDashboard() {
  const dispatch = useDispatch();

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleAddPatient = () => {
    console.log("body,", patient);
    dispatch(addPatient(patient));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Reception Panel
        </h1>

        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Add Patient
        </h2>

        {/* Name */}
        <input
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Patient Name"
          onChange={(e) =>
            setPatient({ ...patient, name: e.target.value })
          }
        />

        {/* Age */}
        <input
          type="number"
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Age"
          onChange={(e) =>
            setPatient({ ...patient, age: Number(e.target.value) })
          }
        />

        {/* Gender */}
        <select
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) =>
            setPatient({ ...patient, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Contact */}
        <input
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Contact Number"
          onChange={(e) =>
            setPatient({ ...patient, contact: e.target.value })
          }
        />

        {/* Button */}
        <button
          onClick={handleAddPatient}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Save Patient
        </button>
      </div>
    </div>
  );
}