import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {}

// Define the initial state using that type
const initialState: IInitialState = {};

export const foundSlice = createSlice({
  name: "found",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setfound: () => {},
  },
});

export const { setfound } = foundSlice.actions;

export default foundSlice.reducer;
