import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayersDeckState {
  layers: any;
}

const initialState: LayersDeckState = {
  layers: [],
};

export const layersDeckSlice = createSlice({
  name: "layersDeck",
  initialState,
  reducers: {
    addLayersDeck: (state, action: PayloadAction<any>) => {
      state.layers = [...state.layers, ...action.payload];
    },
    removeLayerDeck: (state, action: PayloadAction<any>) => {
      state.layers = state.layers.filter(layer => layer.id !== action.payload.id);
    },
    removeAllLayersDeck: (state) => {
      state.layers = [];
    }
  },
});

export const { addLayersDeck, removeLayerDeck, removeAllLayersDeck } = layersDeckSlice.actions;

export default layersDeckSlice.reducer;
