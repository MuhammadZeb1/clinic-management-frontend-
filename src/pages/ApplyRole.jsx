import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyRole } from "../features/roleRequest/roleRequestSlice";

export default function ApplyRole() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    requestedRole: "doctor",
    experience: "",
    specialization: "",
  });

  const handleSubmit = () => {
    dispatch(
      applyRole({
        userId: user._id,
        ...form,
      })
    );
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Apply for Role</h1>

      <select
        onChange={(e) =>
          setForm({ ...form, requestedRole: e.target.value })
        }
      >
        <option value="doctor">Doctor</option>
        <option value="receptionist">Receptionist</option>
      </select>

      <input
        placeholder="Experience"
        onChange={(e) =>
          setForm({ ...form, experience: e.target.value })
        }
      />

      <input
        placeholder="Specialization"
        onChange={(e) =>
          setForm({ ...form, specialization: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-3 py-2 mt-3"
      >
        Apply
      </button>
    </div>
  );
}