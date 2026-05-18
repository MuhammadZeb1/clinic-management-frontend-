import api from "../../api/api";

/* ================= CREATE PRESCRIPTION ================= */
export const createPrescription = (data) => {
  return api.post("/prescriptions", data);
};

/* ================= GET ALL PRESCRIPTIONS ================= */
export const fetchPrescriptions = () => {
  return api.get("/prescriptions");
};

/* ================= GET SINGLE PATIENT PRESCRIPTIONS ================= */
export const fetchPatientPrescriptions = (patientId) => {
  return api.get(`/prescriptions/patient/${patientId}`);
};

/* ================= DELETE PRESCRIPTION (optional admin feature) ================= */
export const deletePrescription = (id) => {
  return api.delete(`/prescriptions/${id}`);
};