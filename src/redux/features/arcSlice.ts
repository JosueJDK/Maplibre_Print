import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArcState {
  isSourceSelected: boolean;
  source: any;
  target: any;
  dashboardData: any;
}

const initialState: ArcState = {
  isSourceSelected: false,
  source: null,
  target: null,
  dashboardData: null
};

export const arcSlice = createSlice({
  name: "arc",
  initialState,
  reducers: {
    setSelectionState: (state, action: PayloadAction<any>) => {
      state.isSourceSelected = action.payload.isSourceSelected;
      state.source = action.payload.source;
      state.target = action.payload.target;
    },
    setDashboardData: (state, action: PayloadAction<any>) => {
      state.dashboardData = action.payload;
    },
    resetArc: (state) => {
        state.isSourceSelected = false;
        state.source = null;
        state.target = null;
        state.dashboardData = null;
    }
  },
});

export const { resetArc, setSelectionState, setDashboardData } = arcSlice.actions;

export default arcSlice.reducer;
