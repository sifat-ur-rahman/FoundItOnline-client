import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {}

// Define the initial state using that type
const initialState: IInitialState = {};

export const lostSlice = createSlice({
  name: "lost",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setlost: () => {},
  },
});

export const { setlost } = lostSlice.actions;

export default lostSlice.reducer;
