import React from "react";
import Map, { NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import DeckGlComponent from "./Deckgl";
import { INITIAL_VIEW_STATE } from "@/Map/constants/map.constants";
import HeaderMapComponent from "./HeaderMap";
import FooterMapComponent from "./FooterMap";
import "../style/Map.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PanelInnerMap } from "./PanelTabMap";
import { ButtonPanelToggleMap } from "./ButtonPanelToggleMap";
import { setScreenWidth } from "@/redux/features/panelSlice";
import MapHandler from "./utils/MapHandler";
import { setMapRef } from "@/redux/features/mapSlice";

export default function MapComponent() {
  const mapRef = React.useRef(null);
  const dispatch = useAppDispatch();
  const mapStyle = useAppSelector((state) => state.mapStyleReducer.layer);
  const panelReducer = useAppSelector((state) => state.panelReducer);

  React.useEffect(() => {
    dispatch(setScreenWidth(window.innerWidth));
  }, [dispatch]);

  const onMapLoad = React.useCallback(() => {
    const attributionControl = document.querySelector('.maplibregl-ctrl-attrib-inner');
    mapRef.current.resize();
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    if (attributionControl) {
      attributionControl.innerHTML = '© <a href="#" target="_blank" rel="noopener">GeoSolution</a> | © <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> contributors';
    }    
    dispatch(setMapRef(mapRef.current))
  }, [dispatch]);

  const [hoverInfo, setHoverInfo] = React.useState<any>(null);

  return (
    <>
      {panelReducer.showPanel && <PanelInnerMap />}

      <Map
        ref={mapRef}
        mapStyle={mapStyle.style}
        onLoad={onMapLoad}
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl}
        style={{ width: panelReducer.showPanel ? `${parseInt(panelReducer.screenWidth.toString()) - panelReducer.panelWidth}px` : "100vw", height: "100vh", transition: panelReducer.applyTransition ? "width 0.5s ease" : "" }}>
        
        
        <HeaderMapComponent />
        <DeckGlComponent />
        {hoverInfo !== null && hoverInfo.info.object && (
          <div style={{position: 'absolute', zIndex: 30, pointerEvents: 'none', left: hoverInfo.info.x, top: hoverInfo.info.y, background: "white", padding: "5px"}}>
            <p className="font-bold">DETALLE</p>
            <p>{hoverInfo.source.name} {">>"} { hoverInfo.info.object.properties.name }</p>
            <p>Viajes: {hoverInfo.info.object.properties.suma_viajes}</p>
          </div>
        )}
        <NavigationControl position="bottom-right" />
        <ScaleControl />
        <FooterMapComponent />
        <ButtonPanelToggleMap />
        <MapHandler setHoverInfo={setHoverInfo}/>

      </Map>
      
    </>
  );
}
