import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAppointments,
  createAppointment,
} from "./appointmentService";

export const getAppointments = createAsyncThunk(
  "appointments/get",
  async () => {
    const res = await fetchAppointments();
    return res.data;
  }
);

export const addAppointment = createAsyncThunk(
  "appointments/add",
  async (data) => {
    const res = await createAppointment(data);
    return res.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    list: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAppointments.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default appointmentSlice.reducer;