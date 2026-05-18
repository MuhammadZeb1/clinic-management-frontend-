import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

/* ================= CREATE PRESCRIPTION ================= */
export const addPrescription = createAsyncThunk(
  "prescription/add",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/prescriptions", data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

/* ================= GET PRESCRIPTIONS ================= */
export const getPrescriptions = createAsyncThunk(
  "prescription/get",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/prescriptions");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

/* ================= SLICE ================= */
const prescriptionSlice = createSlice({
  name: "prescription",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET
      .addCase(getPrescriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPrescriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getPrescriptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addPrescription.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default prescriptionSlice.reducer;