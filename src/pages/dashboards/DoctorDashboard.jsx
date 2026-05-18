import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAppointments } from "../../features/appointment/appointmentSlice";

export default function DoctorDashboard() {
  const dispatch = useDispatch();

  const appointments = useSelector(
    (state) => state.appointments.list
  );

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Doctor Dashboard</h1>

      <h2 className="mt-4 font-semibold">Today Appointments</h2>

      <div className="grid gap-3 mt-3">
        {appointments.map((a) => (
          <div key={a._id} className="p-3 border rounded">
            <p>Patient: {a.patientId?.name}</p>
            <p>Status: {a.status}</p>
            <p>Date: {a.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}