import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../../features/analytics/analyticsSlice";

export default function AdminDashboard() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.analytics.data);

  useEffect(() => {
    dispatch(fetchStats());
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="mt-4">
        <p>Total Patients: {data?.patients}</p>
        <p>Total Appointments: {data?.appointments}</p>
      </div>
    </div>
  );
}