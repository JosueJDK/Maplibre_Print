import { TabOption } from "@/Map/components/PanelTabMap";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type panelSlice = {
    showPanel: boolean;
    panelWidth: number;
    screenWidth: string | number;
    applyTransition: boolean;
    activePanel: any;
    activeSubPanel: any;
    activeTab: any
};

const initialState: panelSlice = {
    showPanel : false,
    panelWidth : 350,
    screenWidth : "100vw",
    applyTransition : false,
    activePanel : null,
    activeSubPanel : null,
    activeTab: TabOption.Tab1
};

export const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setShowPanel: (state, action: PayloadAction<any>) => {
      state.showPanel = action.payload;
    },
    setPanelWidth: (state, action: PayloadAction<any>) => {
        state.panelWidth = action.payload;
    },
    setScreenWidth: (state, action: PayloadAction<any>) => {
        state.screenWidth = action.payload;
    },
    setApplyTransition: (state, action: PayloadAction<any>) => {
        state.applyTransition = action.payload;
    },
    setActivePanel: (state, action: PayloadAction<any>) => {
      state.activePanel = state.activePanel === action.payload ? null : action.payload;
    },
    setActiveSubPanel: (state, action: PayloadAction<any>) => {
        state.activeSubPanel = state.activeSubPanel === action.payload ? null : action.payload;
    },
    setActiveTab: (state, action: PayloadAction<any>) => {
        state.activeTab = action.payload;
    },
  },
});

export const {
    setShowPanel, setPanelWidth, setScreenWidth, setApplyTransition, setActivePanel, setActiveSubPanel, setActiveTab
} = panelSlice.actions;

export default panelSlice.reducer;