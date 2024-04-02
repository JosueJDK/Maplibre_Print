import ControlLayers from "@/components/control/MapControlLayer";
import * as E from "@/components/elements";
import { setActiveSubPanel, setActiveTab, setApplyTransition, setShowPanel } from "@/redux/features/panelSlice";
import { setActivePanel } from "@/redux/features/panelSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { EraserIcon, GearIcon, HomeIcon, PersonIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { clsx } from "clsx";
import React from "react";
import { TabOption } from "./PanelTabMap";
import { resetCheckedStates } from "@/redux/features/layersGeoserver";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { removeAllLayers } from "@/redux/features/layersSlice";
import Image from "next/image";
import { resetArc } from "@/redux/features/arcSlice";
import { resetLineasDeseo, resetPerfilViajero, resetPeriodoEstudio } from "@/redux/features/analyticsSlice";
import { delete_layers, delete_source } from "../map_functions/layers_map";
import ControlPrint from "@/components/control/Print/MapControlPrint";

export default function HeaderMapComponent() {

    const dispatch = useAppDispatch();
    const panelReducer = useAppSelector((state) => state.panelReducer);
    const layers = useAppSelector((state) => state.layersReducer.layers);
    const mapRef = useAppSelector((state) => state.mapReducer.mapRef);

    const openSidePanelOption = (title) => {
        if(panelReducer.showPanel && panelReducer.activePanel !== title){
            dispatch(setActivePanel(title))
            dispatch(setActiveTab(TabOption.Tab1))
            return
        }
        if(panelReducer.showPanel && panelReducer.activePanel === title){
            dispatch(setShowPanel(!panelReducer.showPanel))
            dispatch(setApplyTransition(true))
            dispatch(setActivePanel(null))
            dispatch(setActiveSubPanel(null))
            return
        }
        else{
            dispatch(setShowPanel(!panelReducer.showPanel))
            dispatch(setApplyTransition(true))
            setTimeout(() => {
                dispatch(setApplyTransition(false))
                dispatch(setActivePanel(title))
            }, 500)
            return
        }
    }

    const openSidePanelTab = (activeTab) => {
        if(panelReducer.showPanel && panelReducer.activeTab !== activeTab){
            dispatch(setActiveTab(activeTab))            
        }
        else{
            dispatch(setShowPanel(!panelReducer.showPanel))
            dispatch(setApplyTransition(true))
            setTimeout(() => {
                dispatch(setApplyTransition(false))
                dispatch(setActiveTab(activeTab))            
            }, 500)            
        }
    }

    const isLargeScreen = parseInt(panelReducer.screenWidth.toString()) - panelReducer.panelWidth > 1290;

    return (
        <div className="absolute flex items-center justify-between z-50" style={{width:"100%"}}>
             <div className={clsx(
                'pt-2 z-50 mx-3',
                { 'flex': isLargeScreen}
                )}>
            <a target="_blank" href="https://www.gob.pe/mtc">
                <Image src={`${process.env.basePath}/img/mapa/mtc.png`} alt="Logo MTC" width={150} height={35} />
            </a>

            <a target="_blank" href="https://www.atu.gob.pe/">
            <Image src={`${process.env.basePath}/img/mapa/logoatte.png`} alt="Logo ATU" width={150} height={30}
                style={{ height: "30px", margin: isLargeScreen ? "5px" : "", marginLeft: isLargeScreen ? "" : "-10px", marginTop: isLargeScreen ? "" : "5px"}}
            />            
            </a>
            </div>

            <div className={clsx('flex items-center z-50 buttons-center',{ 'move-margin-right': !isLargeScreen })}>
                <E.Button size="md" variant="primary" className="mr-2" onClick={() => openSidePanelOption("Seleccionar las Líneas de Deseo")}>
                    <PersonIcon></PersonIcon>
                    Análisis de viajes
                </E.Button>
                <E.Button size="md" variant="primary" onClick={() => openSidePanelOption("Perfil de Viajero")}>
                    <svg width="17" height="17" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Perfil de viajero
                </E.Button>
                <E.Button size="md" variant="primary" onClick={()=> {
                    delete_layers({mapRef, layers})
                    delete_source({mapRef, sources: layers})
                    dispatch(resetCheckedStates());
                    dispatch(removeAllLayers())
                    dispatch(resetArc())
                    dispatch(resetLineasDeseo())
                    dispatch(resetPerfilViajero())
                    dispatch(resetPeriodoEstudio())
                    dispatch(removeAllLayersDeck())
                }}>
                    <EraserIcon />
                    Limpiar Mapa
                </E.Button>
                <E.Button size="md" variant="primary">
                    <HomeIcon />
                    Portada
                </E.Button>
                <E.Button size="md" variant="primary"  onClick={()=> openSidePanelTab(TabOption.Support)}>
                    <QuestionMarkCircledIcon />
                    Ayuda
                </E.Button>
                <E.Button size="md" variant="primary" onClick={()=> openSidePanelTab(TabOption.Support)}>
                    <GearIcon />
                    Soporte
                </E.Button>
            </div>

            <div className="flex mx-3 flex-row-reverse space-x-4 space-x-reverse">
                <ControlLayers />
                <ControlPrint />
            </div>
        </div>
        
    );
}
