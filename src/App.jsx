import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layout/Layout";

// Dashboards
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import DoctorDashboard from "./pages/dashboards/DoctorDashboard";
import ReceptionistDashboard from "./pages/dashboards/ReceptionistDashboard";
import PatientDashboard from "./pages/dashboards/PatientDashboard";

// Modules
import PatientsPage from "./pages/patients/PatientsPage";
import AddPatient from "./pages/patients/AddPatient";

import AppointmentsPage from "./pages/appointments/AppointmentsPage";
import BookAppointment from "./pages/appointments/BookAppointment";

import AISymptomChecker from "./pages/ai/AISymptomChecker";

import PrescriptionsPage from "./pages/prescriptions/PrescriptionsPage";
import CreatePrescription from "./pages/prescriptions/CreatePrescription";

import AnalyticsPage from "./pages/analytics/AnalyticsPage";

// Optional: Role Requests page (you added earlier)
import RoleRequests from "./pages/admin/RoleRequests";
import ApplyRole from "./pages/ApplyRole";

const App = () => {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= PROTECTED ROUTES ================= */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >

        {/* DEFAULT REDIRECT */}
        <Route index element={<Navigate to="/patient" />} />

        {/* ================= DASHBOARDS ================= */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/role-requests" element={<RoleRequests />} />
        <Route path="admin/apply-role" element={<ApplyRole />} />

        <Route path="doctor" element={<DoctorDashboard />} />
        <Route path="receptionist" element={<ReceptionistDashboard />} />
        <Route path="patient" element={<PatientDashboard />} />

        {/* ================= PATIENT MODULE ================= */}
        <Route path="patients" element={<PatientsPage />} />
        <Route path="patients/add" element={<AddPatient />} />

        {/* ================= APPOINTMENTS ================= */}
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="appointments/book" element={<BookAppointment />} />

        {/* ================= AI MODULE ================= */}
        <Route path="ai" element={<AISymptomChecker />} />

        {/* ================= PRESCRIPTIONS ================= */}
        <Route path="prescriptions" element={<PrescriptionsPage />} />
        <Route
          path="prescriptions/create"
          element={<CreatePrescription />}
        />

        {/* ================= ANALYTICS ================= */}
        <Route path="analytics" element={<AnalyticsPage />} />

      </Route>

      {/* ================= 404 ROUTE ================= */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
};

export default App;