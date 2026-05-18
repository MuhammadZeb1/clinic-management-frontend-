import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const role = user?.role;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-blue-900 text-white p-4 flex flex-col">

        <h1 className="text-xl font-bold mb-6">
          🏥 Clinic SaaS
        </h1>

        <nav className="flex flex-col gap-3 flex-1">

          {/* ================= COMMON ================= */}
          <NavLink to={`/${role}`}>Dashboard</NavLink>

          {/* ================= ADMIN ================= */}
          {role === "admin" && (
            <>
              <NavLink to="/admin">Admin Panel</NavLink>
              <NavLink to="/admin/role-requests">
                Role Requests
              </NavLink>
              <NavLink to="/analytics">Analytics</NavLink>
              <NavLink to="/patients">Patients</NavLink>
              <NavLink to="/appointments">Appointments</NavLink>
            </>
          )}

          {/* ================= DOCTOR ================= */}
          {role === "doctor" && (
            <>
              <NavLink to="/doctor">Doctor Panel</NavLink>
              <NavLink to="/patients">Patients</NavLink>
              <NavLink to="/appointments">Appointments</NavLink>
              <NavLink to="/prescriptions">
                Prescriptions
              </NavLink>
              <NavLink to="/ai">AI Checker</NavLink>
            </>
          )}

          {/* ================= RECEPTIONIST ================= */}
          {role === "receptionist" && (
            <>
              <NavLink to="/receptionist">
                Reception Panel
              </NavLink>
              <NavLink to="/patients">Patients</NavLink>
              <NavLink to="/appointments/book">
                Book Appointment
              </NavLink>
              <NavLink to="/appointments">
                Appointments
              </NavLink>
            </>
          )}

          {/* ================= PATIENT ================= */}
          {role === "patient" && (
            <>
              <NavLink to="/patient">My Dashboard</NavLink>
              <NavLink to="/appointments">
                My Appointments
              </NavLink>
              <NavLink to="/prescriptions">
                My Prescriptions
              </NavLink>
              <NavLink to="/ai">AI Checker</NavLink>
            </>
          )}

          <hr className="my-2" />

        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 mt-auto py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
}