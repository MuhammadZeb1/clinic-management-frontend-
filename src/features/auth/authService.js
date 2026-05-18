import api from "../../api/axios";

// Register User
const register = async (userData) => {
  const { data } = await api.post("/auth/register", userData);

  if (data?.token) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

// Login User
const login = async (userData) => {
  const { data } = await api.post("/auth/login", userData);

  if (data?.token) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

// Get Profile (optional but important)
const getMe = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};

// Logout User
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
  getMe,
};

export default authService;