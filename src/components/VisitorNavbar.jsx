import { Link, useLocation } from "react-router-dom";

const VisitorNavbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        Clinic System
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        
        <Link
          to="/login"
          className={`px-4 py-2 rounded-md transition ${
            location.pathname === "/login"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Login
        </Link>

        <Link
          to="/register"
          className={`px-4 py-2 rounded-md transition ${
            location.pathname === "/register"
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default VisitorNavbar;