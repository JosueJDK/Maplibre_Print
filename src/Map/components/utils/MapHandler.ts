import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { resetArc, setSelectionState } from "@/redux/features/arcSlice";
import { ArcLayer, TextLayer } from "@deck.gl/layers/typed";
import { useMap } from 'react-map-gl/maplibre';
import * as turf from '@turf/turf';
import { ScatterplotLayer } from "@deck.gl/layers/typed";

const MapHandler = ({setHoverInfo}) => {
  const {current: mapRef} = useMap();
  const dispatch = useAppDispatch();
  const layers = useAppSelector((state) => state.layersReducer.layers);
  const selectionState = useAppSelector((state) => state.arcReducer);
  const [altPressed, setAaltPressed] = React.useState(false);
  const altPressedRef = React.useRef(altPressed);

  async function handleMapClick(e) {

    const map = mapRef.getMap();
    const features : any = map.queryRenderedFeatures(e.point);
    if (map!.getCanvas().style.cursor === "pointer" || !features || features.length === 0) return null;

    const featuresFiltered = features.filter((f) => {
      if(layers.at(-1) === null) return []
      const layerId = layers.at(-1) ? layers.at(-1).id : null;
      return f.layer.id === layerId;
    });

    if(featuresFiltered.length === 0) return null

    const dataFeatures = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: featuresFiltered[0].geometry.type,
            coordinates: featuresFiltered[0].geometry.coordinates
          },
          properties: featuresFiltered[0].properties
        }
      ]
    };

    const layerId = `${layers.at(-1).id}-outline-selected`
    const type = !selectionState.isSourceSelected  ? "source" : "target";
    
    const featureCollection = dataFeatures as turf.FeatureCollection;
    

    const updatedFeatureCollection = featureCollection.features.map(feature => {
      feature.properties.type = type;
      feature.properties.centroid = [feature.properties.lon, feature.properties.lat]
      // TODO: Random Point On Feature
      // if(selectionState.isSourceSelected && feature.properties.taz === selectionState.source.properties.taz){
      //   feature.properties.centroid = [feature.properties.lon+ 0.05, feature.properties.lat+ 0.05]
      // }
      return feature;
    });

    if (updatedFeatureCollection === null) return
    // if (altPressedRef.current === false &&!selectionState.isSourceSelected) {
    if (!selectionState.isSourceSelected) {
      dispatch(setSelectionState(({
        source: updatedFeatureCollection[0],
        target: null,
        isSourceSelected: true,
      })));
      dispatch(removeAllLayersDeck())

      map.setFilter(layerId, [
        "in", 
        "taz", 
        updatedFeatureCollection[0].properties.taz
      ]);

      // map.setPaintProperty(layerId, 'line-color', '#94F14B');
      
    } else {
      const targetData = selectionState.target  && selectionState.target.length !== 0 ? [ ...selectionState.target , ...updatedFeatureCollection] : [...updatedFeatureCollection]
      dispatch(setSelectionState(({
        source: selectionState.source,
        target: targetData,
        // isSourceSelected: altPressedRef.current,
        isSourceSelected: false,
      })));    
    }
  }

  // function handleKeyDown(event) {
  //   if (event.keyCode === 18) {
  //     setAaltPressed(true);
  //   }
  // }

  // function handleKeyUp(event) {
  //   if (event.keyCode === 18) {
  //     setAaltPressed(false);
  //   }
  // }

  // React.useEffect(() => {
  //   altPressedRef.current = altPressed;
  //   if(!altPressedRef.current){
  //     dispatch(resetArc());
  //   }
  // }, [altPressed]);

  // React.useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("keyup", handleKeyUp);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, []);

  React.useEffect(() => {
    const map = mapRef.getMap();
    
    if (selectionState.source !== null && selectionState.target !== null ) {
      const map = mapRef.getMap();
      const layerId = `${layers.at(-1).id}-outline-selected`
      console.log( selectionState.target)
      // const filters: any =  altPressedRef.current ? map.getFilter(layerId) :['in', 'taz', selectionState.source.properties.taz];
      const filters: any =  ['in', 'taz', selectionState.source.properties.taz];

      selectionState.target.map((target) => {
        filters.push("taz")
        filters.push(target.properties.taz)
      })      
      map.setFilter(layerId, filters);
            
      const dataArc : any = { type: 'FeatureCollection', features: [selectionState.source, ...selectionState.target]};

      const arcInstance = new ArcLayer({
        id: uuidv4(), // Genera un ID único para la capa
        data: dataArc,       
        getHeight: 0.5,
        pickable: true,
        onClick: (e) => console.log(e),
        dataTransform: ( f : any ) =>
           f.features.filter(( f : any ) => f && f.properties),
        getSourcePosition: (f) => selectionState.source.properties.centroid,
        getTargetPosition: (f) => f.properties.centroid,
        getSourceColor: (f) => {
          console.log([Math.sqrt(f.inbound), 140, 0])
          return [Math.sqrt(f.inbound), 140, 0]
        },
        getTargetColor: (f) => [255, 140, 0],
        getWidth: (f) => 4,
        // getWidth: (f) => {
        //   if(f.properties.type === "target"  && f.properties.suma_viajes){
        //     const sumaViajes = parseFloat(f.properties.suma_viajes.replace(',', ''));
        //     const minWidth = 4;
        //     const maxWidth = 30;
        //     const scaledWidth = minWidth + (maxWidth - minWidth) * (sumaViajes / selectionState.source.properties.max_suma_viajes);
        //     return scaledWidth;
        //   }
        //   else{
        //     return 3
        //   }
          
        // },
        onHover: info => setHoverInfo({info, source: selectionState.source.properties}),
      });

      const layerCircle = new ScatterplotLayer({
        id: uuidv4(), // Genera un ID único para la capa
        data: dataArc,
        radiusScale: 20,
        dataTransform: ( f : any ) =>
          f.features.filter(( f : any ) => f && f.properties),
        getPosition: (f) => f.properties.centroid,
        getFillColor: (f) => {
          if(f.properties.type === "source"){
            return [Math.sqrt(f.inbound), 140, 0]
          }
          return [255, 140, 0]
        },
        getRadius: (f) => 10,
        // getRadius: (f) => {
        //   if (f.properties.type === "target" && f.properties.suma_viajes) {
        //       const sumaViajes = parseFloat(f.properties.suma_viajes.replace(',', ''));
        //       const minWidth = 10;
        //       const maxWidth = 90;
        //       const maxSumaViajes = selectionState.source.properties.max_suma_viajes;
        //       const scaledWidth = minWidth + (maxWidth - minWidth) * (sumaViajes / maxSumaViajes);
        //       return scaledWidth;
        //   } else {
        //     const lastLayerName = layers.at(-1).id;
        //     const isMacrozonas = lastLayerName === 'macrozonas';
        //     const isSource = f.properties.type === "source";
        
        //     if (isSource) {
        //         return isMacrozonas ? 50 : 10;
        //     }
        //   }
        // },
        pickable: true
      })      

      const textLayer = new TextLayer({
        id: uuidv4(), // Genera un ID único para la capa
        data: dataArc,
        pickable: true,
        dataTransform: ( f : any ) =>
          f.features.filter(( f : any ) => f && f.properties),
        getPosition: (f) => f.properties.centroid,
        getText: d => {
          if(d.properties.suma_viajes){
            return d.properties.suma_viajes
          }
        },
        getColor:(f) => [Math.sqrt(f.inbound), 140, 0],
        getSize: 32,
        getAngle: 0,
        getTextAnchor: 'start',
        getAlignmentBaseline: 'top'
      });
      dispatch(addLayersDeck([textLayer, layerCircle, arcInstance]))
    }

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };

  }, [selectionState, layers]);

  return null;
};

export default MapHandler;
