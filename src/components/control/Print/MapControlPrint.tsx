"use client"
import * as T from "@radix-ui/react-tooltip";
import { Root, Trigger } from "@radix-ui/react-popover";
import * as E from "@/components/elements";
import React, { Suspense, useEffect } from "react";
import { PrintPopover } from "./Print";
import "./ControlPrint.css"
import CrosshairManager from "./crosshair-manager";
import { useMap } from 'react-map-gl/maplibre';
import PrintableAreaManager from "./printable-area-manager";
import MapGenerator, { PageOrientation, Unit } from "./map-generator";

interface PrintConfig {
  page_size: number[],
  page_orientation: string,
  format: string,
  dpi: number
}

export default function ControlPrint() {
  const { current: map } = useMap();
  const [crosshair, setCrosshair] = React.useState(null)
  const [printableArea, setPrintableArea] = React.useState(null)
  const [printConfig, setPrintConfig] = React.useState<PrintConfig>({
    page_size: [297,210],
    page_orientation: "landscape",
    format: "PDF",
    dpi: 400
  })

  const canvasMaplibre = document.getElementsByClassName("canvas-crosshair")

  canvasMaplibre[0]?.addEventListener('click', () => {
    if(crosshair!==null){      
      crosshair.destroy()
      printableArea.destroy()
      setCrosshair(null)
      setPrintableArea(null)
    }
  })

  React.useEffect(() => {
    if(crosshair !== null ){
      updatePrintableArea()
    }
  }, [printConfig]);


  function updatePrintableArea() {
    const printArea = printableArea

    if (printConfig.page_orientation === PageOrientation.Portrait) {
      printConfig.page_size = printConfig.page_size.reverse();
    }  
    printArea?.updateArea(printConfig.page_size[0], printConfig.page_size[1]);
  }
  
  
  const onClickControl = () => {    
    const newCrosshair = new CrosshairManager(map.getMap())    
    if(crosshair === null){
      newCrosshair.create();
      setCrosshair(newCrosshair);
      const newPrintableArea = new PrintableAreaManager(map.getMap())
      setPrintableArea(newPrintableArea)
      newPrintableArea.updateArea(printConfig.page_size[0], printConfig.page_size[1]);
    }else{
      crosshair.destroy()
      printableArea.destroy()
      setCrosshair(null)
      setPrintableArea(null)
    }
  }

  const onClickPrintMap = (setImageBase64, setImageMiniBase64) => {
    const mapGenerator = new MapGenerator(
      map.getMap(),
      printConfig.page_size,
      printConfig.dpi,
      printConfig.format,
      Unit.mm
    );    
    mapGenerator.generateMiniMap().then((value) => {
      setImageMiniBase64(value)
    })
    mapGenerator.generate().then((value) => {
      setImageBase64(value)

    })
  }

    return (
      <T.Provider>
        <T.Root>
        <Root>
           <div className="flex bg-white shadow border border-gray-300 rounded z-50">
            <T.Trigger asChild>
              <Trigger aria-label="Layers" asChild>
                <E.Button variant="quiet" size="md" className="maplibregl-export-control" onClick={() => onClickControl()}>                  
                </E.Button>
              </Trigger>
            </T.Trigger>
          </div>
          
          <E.PopoverContent2 size="xxs" className="mx-3 w-30">
            <Suspense fallback={<E.Loading size="sm" />}>
              <PrintPopover printConfig={printConfig} setPrintConfig={setPrintConfig} onClickPrintMap={onClickPrintMap}/>
            </Suspense>
          </E.PopoverContent2>
        </Root>
       
        <E.TContent side="bottom" className="mx-3">
          <span className="whitespace-nowrap">Imprimir</span>
        </E.TContent> 
      </T.Root>
      </T.Provider>
        
    );
}