import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPatients,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
} from "./patientService";

// ================= GET ALL =================
export const getPatients = createAsyncThunk(
  "patients/get",
  async () => {
    const res = await fetchPatients();
    return res.data;
  }
);

// ================= CREATE =================
export const addPatient = createAsyncThunk(
  "patients/add",
  async (data) => {
    const res = await createPatient(data);
    return res.data;
  }
);

// ================= GET SINGLE =================
export const getSinglePatient = createAsyncThunk(
  "patients/single",
  async (id) => {
    const res = await getPatientById(id);
    return res.data;
  }
);

// ================= UPDATE =================
export const editPatient = createAsyncThunk(
  "patients/update",
  async ({ id, data }) => {
    const res = await updatePatient(id, data);
    return res.data;
  }
);

// ================= DELETE =================
export const removePatient = createAsyncThunk(
  "patients/delete",
  async (id) => {
    await deletePatient(id);
    return id;
  }
);

const patientSlice = createSlice({
  name: "patients",
  initialState: {
    list: [],
    selectedPatient: null,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET ALL
      .addCase(getPatients.fulfilled, (state, action) => {
        state.list = action.payload;
      })

      // ADD
      .addCase(addPatient.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // SINGLE
      .addCase(getSinglePatient.fulfilled, (state, action) => {
        state.selectedPatient = action.payload;
      })

      // UPDATE
      .addCase(editPatient.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (p) => p._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      // DELETE
      .addCase(removePatient.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (p) => p._id !== action.payload
        );
      });
  },
});

export default patientSlice.reducer;