import { PanelInner } from "@/components/PanelTab";
import {SidePanelMapAnalisisComponent} from "./SidePanelMapAnalisis";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { setActiveTab, setPanelWidth, setShowPanel } from "@/redux/features/panelSlice";
import { SidePanelMapSupportComponent}  from "./SidePanelMapSupport";
import React from "react";

export enum TabOption {
    Tab1 = "Análisis de Viajes",
    Support = "Soporte",
}

const TAB_COMPONENTS = {
    [TabOption.Tab1]: SidePanelMapAnalisisComponent,
    [TabOption.Support]: SidePanelMapSupportComponent,
};

export function PanelInnerMap() {
    const panelReducer = useAppSelector((state) => state.panelReducer)

    const dispatch = useAppDispatch();

    const setPanelWidthDispatch = (width) => {
        dispatch(setPanelWidth(width));
    };

    const setShowPanelDispatch = (show) => {
        dispatch(setShowPanel(show));
    };

    const setActiveTabDispatch = (tab) => {
        dispatch(setActiveTab(tab));
    };

    return (
        <PanelInner 
            side={"right"}
            panelWidth={panelReducer.panelWidth} 
            setPanelWidth={setPanelWidthDispatch} 
            setShowPanel={setShowPanelDispatch} 
            tabOrder={[TabOption.Tab1, TabOption.Support]} 
            activeTab={panelReducer.activeTab} 
            setActiveTab={setActiveTabDispatch}
            TAB_COMPONENTS={TAB_COMPONENTS} 
        />
    )
}
