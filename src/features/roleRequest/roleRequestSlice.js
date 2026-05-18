import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  applyRoleRequest,
  fetchRoleRequests,
  approveRoleRequest,
  rejectRoleRequest,
} from "./roleRequestService";

// ================= APPLY =================
export const applyRole = createAsyncThunk(
  "roleRequest/apply",
  async (data) => {
    const res = await applyRoleRequest(data);
    return res.data;
  }
);

// ================= GET ALL =================
export const getRoleRequests = createAsyncThunk(
  "roleRequest/getAll",
  async () => {
    const res = await fetchRoleRequests();
    return res.data;
  }
);

// ================= APPROVE =================
export const approveRole = createAsyncThunk(
  "roleRequest/approve",
  async (id) => {
    const res = await approveRoleRequest(id);
    return res.data;
  }
);

// ================= REJECT =================
export const rejectRole = createAsyncThunk(
  "roleRequest/reject",
  async (id) => {
    const res = await rejectRoleRequest(id);
    return res.data;
  }
);

const roleRequestSlice = createSlice({
  name: "roleRequest",
  initialState: {
    list: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET ALL
      .addCase(getRoleRequests.fulfilled, (state, action) => {
        state.list = action.payload;
      })

      // APPLY (add new request)
      .addCase(applyRole.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // APPROVE (update status)
      .addCase(approveRole.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (r) => r._id === action.payload.request._id
        );

        if (index !== -1) {
          state.list[index] = action.payload.request;
        }
      })

      // REJECT (update status)
      .addCase(rejectRole.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (r) => r._id === action.payload.request._id
        );

        if (index !== -1) {
          state.list[index] = action.payload.request;
        }
      });
  },
});

export default roleRequestSlice.reducer;