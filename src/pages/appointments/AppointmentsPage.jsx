import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../features/appointment/appointmentSlice";

export default function AppointmentsPage() {
  const dispatch = useDispatch();

  const list = useSelector(
    (state) => state.appointments.list
  );

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Appointments
      </h1>

      <div className="space-y-3">
        {list.map((a) => (
          <div key={a._id} className="border p-3 rounded">
            <p>
              <b>Patient:</b> {a.patientId?.name}
            </p>
            <p>
              <b>Doctor:</b> {a.doctorId?.name}
            </p>
            <p>
              <b>Status:</b> {a.status}
            </p>
            <p>
              <b>Date:</b> {a.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}