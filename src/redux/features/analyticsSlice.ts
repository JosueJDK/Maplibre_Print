import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnalyticsState {
  perfil_viajero : {
    horario: string[],
    edad: string[],
    nse: string[],
    tipo_dia: string[],
    motivo: string[],
    genero: string[],
    modo: string[]
  },
  lineas_deseo : {
    type: string | null,
    type_source: string | null,
    type_target: string | null,
    value_source: string | null,
    value_target: string | null,
    source_id : number | null,
    target_id: number | null,
  },
  config_lineas : {
    top_max: boolean,
    top_min: boolean,
    value: number,
  },
  periodo_estudio : {
    year: number | null,
    month: string | null,
  },
}

const initialState: AnalyticsState = {
  perfil_viajero : {
    horario: [],
    edad: [],
    nse: [],
    tipo_dia: [],
    motivo: [],
    genero: [],
    modo: [],
  },
  lineas_deseo : {
    type: null,
    type_source: null,
    type_target: null,
    value_source: null,
    value_target: null,
    source_id : null,
    target_id: null,
  },
  config_lineas : {
    top_max: true,
    top_min: false,
    value: 5,
  },
  periodo_estudio : {
    year: null,
    month: null,
  }
};

export const AnalyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setPerfilViajero: (state, action: PayloadAction<any>) => {
      const updatedPerfilViajero = { ...state.perfil_viajero, ...action.payload };
      state.perfil_viajero = updatedPerfilViajero;
    },
    setLineasDeseo: (state, action: PayloadAction<any>) => {
      const updatedLineasDeseo = { ...state.lineas_deseo, ...action.payload };
      state.lineas_deseo = updatedLineasDeseo;
    },
    setPeriodoEstudio: (state, action: PayloadAction<any>) => {
      state.perfil_viajero = action.payload;
    },
    setConfigLineas: (state, action: PayloadAction<any>) => {
      const updatedConfigLineas = { ...state.config_lineas, ...action.payload };
      state.config_lineas = updatedConfigLineas;
    },
    resetPerfilViajero : (state) => {
      state.perfil_viajero = initialState.perfil_viajero
    },
    resetLineasDeseo : (state) => {
      state.lineas_deseo = initialState.lineas_deseo
    },
    resetPeriodoEstudio : (state) => {
      state.periodo_estudio = initialState.periodo_estudio
    },
    resetConfigLineas : (state) => {
      state.config_lineas = initialState.config_lineas
    }
  },
});

export const { setPerfilViajero, setLineasDeseo, setPeriodoEstudio, setConfigLineas, resetPerfilViajero, resetLineasDeseo, resetPeriodoEstudio, resetConfigLineas } = AnalyticsSlice.actions;

export default AnalyticsSlice.reducer;
