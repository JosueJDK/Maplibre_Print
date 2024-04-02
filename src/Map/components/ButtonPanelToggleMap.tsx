import { PanelToggle } from "@/components/PanelToggle";
import { setApplyTransition, setPanelWidth, setShowPanel } from "@/redux/features/panelSlice";
import { setActivePanel } from "@/redux/features/panelSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function ButtonPanelToggleMap(){
    const panelReducer = useAppSelector((state) => state.panelReducer)
    const dispatch = useAppDispatch();

    const setApplyTransitionDispatch = (e) => {
        dispatch(setApplyTransition(e))
    }

    const setShowPanelDispatch = (e) => {
        dispatch(setShowPanel(e))
    }

    const setActivePanelDispatch = (e) => {
        dispatch(setActivePanel(e))
    }
    
    return (
        <PanelToggle side={"right"} setShowPanel={setShowPanelDispatch} showPanel={panelReducer.showPanel} setApplyTransition={setApplyTransitionDispatch} setPanelWidth={setPanelWidth} setActivePanel={setActivePanelDispatch}/>
    );
}