import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Dashboard</h1>

      <p className="mt-4">Welcome: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <button
        onClick={() => dispatch(logout())}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;