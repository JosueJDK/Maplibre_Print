import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MapState {
  mapRef: any;
}

const initialState: MapState = {
    mapRef: [],
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapRef: (state, action: PayloadAction<any>) => {
      state.mapRef = action.payload;
    },
  },
});

export const { setMapRef } = mapSlice.actions;

export default mapSlice.reducer;
