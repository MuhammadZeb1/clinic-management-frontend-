import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { analyzeSymptoms } from "./aiService";

export const getAIAnalysis = createAsyncThunk(
  "ai/analyze",
  async (data) => {
    const res = await analyzeSymptoms(data);
    return res.data;
  }
);

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    result: null,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAIAnalysis.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAIAnalysis.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      });
  },
});

export default aiSlice.reducer;