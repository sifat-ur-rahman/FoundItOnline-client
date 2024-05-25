import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {}

// Define the initial state using that type
const initialState: IInitialState = {};

export const claimSlice = createSlice({
  name: "claim",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setclaim: () => {},
  },
});

export const { setclaim } = claimSlice.actions;

export default claimSlice.reducer;
