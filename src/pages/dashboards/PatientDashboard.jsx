import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../features/appointment/appointmentSlice";
import { getPrescriptions } from "../../features/prescription/prescriptionSlice";

export default function PatientDashboard() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const appointments =
    useSelector((state) => state.appointments?.list) || [];

  const prescriptions =
    useSelector((state) => state.prescription?.list) || [];

  useEffect(() => {
    if (user?._id) {
      dispatch(getAppointments(user._id));
      dispatch(getPrescriptions(user._id));
    }
  }, [dispatch, user]);

  const myAppointments = appointments.slice(0, 5);
  const myPrescriptions = prescriptions.slice(0, 5);

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        🧑 Patient Dashboard
      </h1>

      {/* APPOINTMENTS */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-3">
          📅 Recent Appointments
        </h2>

        {myAppointments.length === 0 ? (
          <p>No appointments found</p>
        ) : (
          myAppointments.map((a) => (
            <div key={a._id} className="border p-2 rounded">
              <p>Doctor: {a.doctorId?.name}</p>
              <p>{a.date}</p>
            </div>
          ))
        )}
      </div>

      {/* PRESCRIPTIONS */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-3">
          💊 Prescriptions
        </h2>

        {myPrescriptions.length === 0 ? (
          <p>No prescriptions found</p>
        ) : (
          myPrescriptions.map((p) => (
            <div key={p._id} className="border p-2 rounded">
              <p>Doctor: {p.doctorId?.name}</p>
              <p>
                {p.medicines?.map((m) => m.name).join(", ")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}