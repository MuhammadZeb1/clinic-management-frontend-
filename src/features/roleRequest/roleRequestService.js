import api from "../../api/axios";

// USER APPLY FOR ROLE
export const applyRoleRequest = (data) => {
  return api.post("/role-requests", data);
};

// ADMIN: GET ALL REQUESTS
export const fetchRoleRequests = () => {
  return api.get("/role-requests");
};

// ADMIN: APPROVE
export const approveRoleRequest = (id) => {
  return api.put(`/role-requests/${id}/approve`);
};

// ADMIN: REJECT
export const rejectRoleRequest = (id) => {
  return api.put(`/role-requests/${id}/reject`);
};