import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../features/patient/patientSlice";
import { useNavigate } from "react-router-dom";

export default function PatientsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const patients = useSelector((state) => state.patients.list);

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Patients</h1>

        <button
          className="bg-blue-600 text-white px-3 py-1"
          onClick={() => navigate("/patients/add")}
        >
          + Add Patient
        </button>
      </div>

      <div className="grid gap-3">
        {patients.map((p) => (
          <div key={p._id} className="border p-3 rounded">
            <p className="font-semibold">{p.name}</p>
            <p>Age: {p.age}</p>
            <p>Gender: {p.gender}</p>
            <p>Contact: {p.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}