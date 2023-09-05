import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "sharEditData",
  initialState: null,
  reducers: {
    shareData: (state, action) => {
      return action.payload; // Update the shared data with the new value
    },
  },
});

export const { shareData } = dataSlice.actions;
export default dataSlice.reducer;
