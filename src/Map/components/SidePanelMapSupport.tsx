import { PanelDetailsCollapsible } from "@/components/PanelCollapsible";
import { SidePanel } from "@/components/PanelToggle";
import { StyledLabelSpan } from "@/components/elements";
import React from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActivePanel, setActiveSubPanel } from "@/redux/features/panelSlice";
import { DownloadIcon } from "@radix-ui/react-icons";

export function SidePanelMapSupportComponent({panelWidth}) {

    const sidePanel = useAppSelector((state) => state.panelReducer);
    const dispatch = useAppDispatch();

    const collapsibleSubTitles = [
        {
            id: "sub-001",
            title: "Mesozonas",
            children: (
                <>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Diciembre 2016</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Febrero 2017</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mayo 2017</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Diciembre 2017</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mayo 2019</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                </>
            )
        },
        {
            id: "sub-002",
            title: "Distritos",
            children: (
                <>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Diciembre 2016</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Febrero 2017</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mayo 2017</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Diciembre 2017</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mayo 2019</StyledLabelSpan>
                        <a href="#"  target="_blank"><DownloadIcon/></a>
                    </div>
                </>
            )
        },
        {
            id: "sub-003",
            title: "Macrozonas",
            children: (
                <>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Diciembre 2016</StyledLabelSpan>
                        <a href="#" target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Febrero 2017</StyledLabelSpan>
                        <a href="#" target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mayo 2017</StyledLabelSpan>
                        <a href="#" target="_blank"><DownloadIcon/></a>
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Diciembre 2017</StyledLabelSpan>
                        <a href="#" target="_blank"><DownloadIcon/></a>
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mayo 2019</StyledLabelSpan>
                        <a href="#" target="_blank"><DownloadIcon/></a>
                    </div>
                </>
            )
        }
    ];

    const collapsibleTitles = [
        {
            id: "tit-001",
            headLine: false,
            title: "Guia de usuario",
            children:  (
                <p className="text-xs flex justify-between">
                    Descargar Manual PDF
                    <a href="#" target="_blank"><DownloadIcon/></a>
                </p>
            )
        },
        {
            id: "tit-002",
            headLine: true,
            title: "Ejemplos del Aplicativo",
            children: (
                <p className="text-xs flex justify-between">
                Descargar Ejemplos Aplicativo PDF
                <a href="#"  target="_blank"><DownloadIcon/></a>
            </p>
            )
        },
        {
            id: "tit-003",
            headLine: true,
            title: "Presentación del Estudio Big Data",
            children: (                
                <p className="text-xs flex justify-between">
                    Descargar Presentacion Big Data PPT
                    <a href="#"  target="_blank"><DownloadIcon/></a>
                </p>
            )
        },
        {
            id: "tit-004",
            title: " Descarga matrices según tipos de zonas",
            headLine: true,
            children:  (
                collapsibleSubTitles.map((element) => (
                    <div key={element.id} className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
                        <PanelDetailsCollapsible
                            bold="bold-2"
                            key={element.title}
                            title={element.title}                
                            state={sidePanel.activeSubPanel === element.title}
                            onToggle={() => {
                                dispatch(setActiveSubPanel(element.title))
                            }}
                        >
                            {element.children}
                        </PanelDetailsCollapsible>
                    </div>
                ))
            )
        },
    ];

  

  return (

    <SidePanel side={"right"} panelWidth={panelWidth}>
        
        {collapsibleTitles.map((element) => (
        <div key={element.id} className={clsx( element.headLine ? "divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar" : "")}>
          <PanelDetailsCollapsible            
            bold="bold-1"
            title={element.title}
            state={sidePanel.activePanel === element.title} 
            onToggle={() => {
                dispatch(setActivePanel(element.title))
            }}
            >
            {element.children}
          </PanelDetailsCollapsible>
          </div>
        ))}
        <div key={"tit-005"} className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
            <PanelDetailsCollapsible title="Soporte" state={true} onToggle={() => false} bold="bold-1">
                <p className="text-sm">
                    Enviarnos sus comentarios y/o consultas al siguiente correo:
                    <a href="mailto:soportebigdata@atu.gob.pe"  target="_blank">soportebigdata@atu.gob.pe</a>
                </p>
            </PanelDetailsCollapsible>
        </div>

    </SidePanel>
  );
}

export default SidePanelMapSupportComponent;