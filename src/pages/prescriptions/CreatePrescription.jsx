import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPrescription } from "../../features/prescription/prescriptionSlice";

export default function CreatePrescription() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    patientId: "",
    doctorId: "",
    medicines: "",
    notes: "",
  });

  const handleSubmit = async () => {
    const payload = {
      ...form,
      medicines: [
        {
          name: form.medicines,
          dosage: "1-0-1",
          instructions: "After food",
        },
      ],
    };

    await dispatch(addPrescription(payload));
    alert("Prescription Created");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Create Prescription
      </h1>

      <input
        placeholder="Patient ID"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({ ...form, patientId: e.target.value })
        }
      />

      <input
        placeholder="Doctor ID"
        className="border p-2 w-full mt-2"
        onChange={(e) =>
          setForm({ ...form, doctorId: e.target.value })
        }
      />

      <input
        placeholder="Medicine"
        className="border p-2 w-full mt-2"
        onChange={(e) =>
          setForm({ ...form, medicines: e.target.value })
        }
      />

      <textarea
        placeholder="Notes"
        className="border p-2 w-full mt-2"
        onChange={(e) =>
          setForm({ ...form, notes: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 mt-3"
      >
        Save Prescription
      </button>
    </div>
  );
}