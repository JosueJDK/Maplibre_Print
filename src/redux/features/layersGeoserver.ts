import { mapLayersStyleGeoserver } from "@/Map/constants/map.style.layers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayersGeoserverState {
  macrozonas: any;
  distritos: any;
  mesozonas: any;
  microzonas: any;
  sistema_masivo: any;
}

const initialState: LayersGeoserverState = {
  macrozonas: mapLayersStyleGeoserver.macrozonas,
  distritos: mapLayersStyleGeoserver.distritos,
  mesozonas: mapLayersStyleGeoserver.mesozonas,
  microzonas: mapLayersStyleGeoserver.microzonas,
  sistema_masivo: mapLayersStyleGeoserver.sistema_masivo,
};

export const layersGeoserverSlice = createSlice({
  name: "layersDeck",
  initialState,
  reducers: {
    setCheckedStates: (state, action: PayloadAction<any>) => {
      state[action.payload.name].state = action.payload.checked;
    },
    resetCheckedStates: (state) => {
      for (const key in state) {
        state[key].state = false;
      }
    },
  },
});

export const { setCheckedStates, resetCheckedStates } = layersGeoserverSlice.actions;

export default layersGeoserverSlice.reducer;
