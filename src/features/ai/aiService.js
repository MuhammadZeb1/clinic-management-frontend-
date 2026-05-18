import api from "../../api/axios";

export const analyzeSymptoms = (data) => {
  return api.post("/ai/analyze", data);
};