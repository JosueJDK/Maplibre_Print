"use client"
import * as T from "@radix-ui/react-tooltip";
import { Root, Trigger } from "@radix-ui/react-popover";
import * as E from "@/components/elements";
import { LayersIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { LayersPopover } from "./Layers";

export default function ControlLayers() {
    return (
      <T.Provider>
        <T.Root>
        <Root>
           <div className="flex bg-white shadow border border-gray-300 rounded z-50">
            <T.Trigger asChild>
              <Trigger aria-label="Layers" asChild>
                <E.Button variant="quiet" size="md" >
                  <LayersIcon style={{ width: '20px', height: '20px' }}/>
                </E.Button>
              </Trigger>
            </T.Trigger>
          </div>
          
          <E.PopoverContent2 size="xxs" className="mx-3 w-30">
            <Suspense fallback={<E.Loading size="sm" />}>
              <LayersPopover />
            </Suspense>
          </E.PopoverContent2>
        </Root>
       
        <E.TContent side="bottom" className="mx-3">
          <span className="whitespace-nowrap">Control de Mapas</span>
        </E.TContent> 
      </T.Root>
      </T.Provider>
        
    );
}