import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import patientReducer from "../features/patient/patientSlice";
import appointmentReducer from "../features/appointment/appointmentSlice";
import aiReducer from "../features/ai/aiSlice";
import analyticsReducer from "../features/analytics/analyticsSlice";
import roleRequestReducer from "../features/roleRequest/roleRequestSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientReducer,
    roleRequests: roleRequestReducer,
    appointments: appointmentReducer,
    ai: aiReducer,
    analytics: analyticsReducer,
  },
});