import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../../features/analytics/analyticsSlice";

export default function AnalyticsPage() {
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.analytics.data
  );

  useEffect(() => {
    dispatch(fetchStats());
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Analytics Dashboard
      </h1>

      <div className="border p-4">
        <p>Total Patients: {data?.patients}</p>
        <p>Total Appointments: {data?.appointments}</p>
      </div>
    </div>
  );
}