import api from "../../api/axios";

// ================= GET ALL =================
export const fetchPatients = () => {
  return api.get("/patients");
};

// ================= CREATE =================
export const createPatient = (data) => {
  return api.post("/patients", data);
};

// ================= GET SINGLE =================
export const getPatientById = (id) => {
  return api.get(`/patients/${id}`);
};

// ================= UPDATE =================
export const updatePatient = (id, data) => {
  return api.put(`/patients/${id}`, data);
};

// ================= DELETE =================
export const deletePatient = (id) => {
  return api.delete(`/patients/${id}`);
};