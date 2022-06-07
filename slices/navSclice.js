import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};
export const navSclice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});
export const {setOrigin, setDestination, setTravelTimeInformation} = navSclice.actions;
export const selectOrigin = state => state.origin 
export const selectDestination = state => state.destination
export const selectTravelTimeInformation = state => state.travelTimeInformation; 
export default navSclice.reducer;