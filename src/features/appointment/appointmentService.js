import api from "../../api/axios";

export const fetchAppointments = () => {
  return api.get("/appointments");
};

export const createAppointment = (data) => {
  return api.post("/appointments", data);
};