"use client";

import React from "react";
import { MapboxOverlay, MapboxOverlayProps } from '@deck.gl/mapbox/typed';
import { useControl } from 'react-map-gl';
import { useMap } from 'react-map-gl/maplibre';
import { useAppSelector } from "@/redux/hooks";

function DeckGLOverlay(props: MapboxOverlayProps & {
  interleaved?: boolean;
}) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

export default function DeckGlComponent() {

  const { current: map } = useMap();
  const layersDeck = useAppSelector((state) => state.layersDeckReducer.layers);
  map.getMap().getStyle()
  return (
    <DeckGLOverlay
      layers={layersDeck}
      onHover={(info: any) => {
        if (info.picked === true) {
          map!.getCanvas().style.cursor = "pointer";
        } else {
          map!.getCanvas().style.cursor = "grab";
        }
      }}
    ></DeckGLOverlay>
  );
}
