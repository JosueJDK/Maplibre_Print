import { MAP_STYLE } from "@/Map/constants/map.constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type mapStyleSlice = {
  layer: any;
};

const initialState: mapStyleSlice = {
    layer: MAP_STYLE[0],
};

export const mapStyleSlice = createSlice({
  name: "mapStyle",
  initialState,
  reducers: {
    changeMapStyle: (state, action: PayloadAction<any>) => {
      state.layer = action.payload;
    },
  },
});

export const {
    changeMapStyle
} = mapStyleSlice.actions;

export default mapStyleSlice.reducer;