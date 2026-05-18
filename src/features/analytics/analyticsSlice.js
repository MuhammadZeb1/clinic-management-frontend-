import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStats } from "./analyticsService";

export const fetchStats = createAsyncThunk(
  "analytics/get",
  async () => {
    const res = await getStats();
    return res.data;
  }
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    data: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchStats.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default analyticsSlice.reducer;