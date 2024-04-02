import React from 'react';
import * as E from "@/components/elements";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addLayers, removeAllLayers } from '@/redux/features/layersSlice';
import { clsx } from 'clsx';
import { resetCheckedStates, setCheckedStates } from '@/redux/features/layersGeoserver';
import { resetArc } from '@/redux/features/arcSlice';
import ChartsContainer from '@/components/dashboard/ChartsContainer';
import { useMap } from 'react-map-gl/maplibre';
import * as T from "@radix-ui/react-tooltip";
import { Root, Trigger } from "@radix-ui/react-popover";

export default function FooterMapComponent() {
  const { current: map } = useMap();


  const arcReducer = useAppSelector((state) => state.arcReducer);

  const panelReducer = useAppSelector((state) => state.panelReducer);

  const layersGeoserver = useAppSelector((state) => state.layersGeoserverReducer);

  const layers = useAppSelector((state) => state.layersReducer.layers);

  const dispatch = useAppDispatch();

  const isAnyCheckboxChecked = () => {
    return Object.values(layersGeoserver).some((state : any) => state.state);
  };

  const handleCheckboxChange = (index, checked) => {
    const filters : any = map.getMap().getFilter("sistemas-masivos");
    index.map((i)=>{
      if (checked) {
        filters.push("index");
        filters.push(i);
      } else {
        const indexToRemove = filters.indexOf(i);
        if (indexToRemove !== -1 && indexToRemove > 0) {
          filters.splice(indexToRemove - 1, 2);
        }
      }
    })
    map.getMap().setFilter("sistemas-masivos", filters);
  };
  
  const handleLayerChange = (name) => {

    layers.length !== 0 && layers.map((layer) => {
      map.getMap().removeLayer(layer.id);
    })
    layers.length !== 0 && layers.map((layer) => {
      map.getMap().removeSource(layer.id);
    })
    dispatch(removeAllLayers())
    dispatch(resetArc())
    dispatch(removeAllLayersDeck())
    dispatch(resetCheckedStates())
    const layerDetails = layersGeoserver[name];
    dispatch(setCheckedStates({name, checked: !layerDetails.state}))    
    if (!layerDetails.state && layerDetails.layer) {
      dispatch(addLayers(layerDetails.layers))
      layerDetails.layers.map((layer) => {
        map.getMap().addLayer(layer);
      })
    }
  };
  
  return (
   <>
    {/* TODO */}
    {arcReducer.source && (
      <div className="absolute top-0 right-0 my-16 mx-3 p-6 bg-white shadow-lg border border-gray-200 rounded dialog-footer z-50">
        
        <p className="text-gray-700 title-dialog w-16">Leyenda Origen - Destino</p>

        <table className="w-full text-sm rounded-xl border border-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3 items-center justify-center space-x-3 border border-gray-500">
                            <svg className='inline-block' width="15px" height="15px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                              <g id="SVGRepo_bgCarrier" stroke-width="0">
                                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#008C00" strokeWidth="0"></rect>
                              </g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier"> 
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#008C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                              </g>
                            </svg>
                            <p className='inline-block	'>Origen</p>
                        </th>
                        <th scope="col" className="px-6 py-3 items-center justify-center space-x-3 border border-gray-500">
                            <svg className='inline-block	' width="15px" height="15px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                              <g id="SVGRepo_bgCarrier" stroke-width="0">
                                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FF8C00" strokeWidth="0"></rect>
                              </g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier"> 
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FF8C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                              </g>
                            </svg>
                            <p className='inline-block'>Destino</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {arcReducer.target && arcReducer.target.map((element) => (
                    <tr key={element.id} className="bg-white text-center items-center justify-center">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 border border-gray-500">
                          {arcReducer.source.properties.name}
                        </td>
                        <td className="px-6 py-4 text-center border border-gray-500">
                          {element.properties.name}
                        </td>
                    </tr>          
                    // <div key={element.id}>
                    //   <p className="text-gray-700">Origen: <span className="font-medium"></span> Destino: <span className="font-medium"></span></p>          
                    // </div>
                  ))}        
               
                </tbody>
            </table>

        {/* <p className="text-gray-700 title-dialog">SELECCIONE 2 POLIGONOS:</p> */}
        
       
      </div>
    )}

    {/* {isAnyCheckboxChecked() && (
      <div className="absolute top-0 right-0 my-16 mx-3 p-6 bg-white shadow-lg border border-gray-200 rounded dialog-footer">
        <p className="text-gray-700 title-dialog">SELECCIONE 2 POLIGONOS:</p>
        <p className="text-gray-700">Punto Origen:</p>
        <p className="text-gray-700">Punto Destino:</p>
      </div>
    )} */}

    {arcReducer.dashboardData !== null && (
      <ChartsContainer dataAPI={arcReducer.dashboardData}></ChartsContainer>
    )}
    <div className={clsx('footer-component',{ 'move-margin-right': parseInt(panelReducer.screenWidth.toString()) < 1370 })}>
        <div className="flex items-center justify-center gap-2">
        {Object.entries(layersGeoserver).map(([name, { state, label, children }]) => (
          <T.Provider key={name}>
            <T.Root>
              <Root>
                <div style={{ marginRight: "10px" }}>
                  <T.Trigger asChild>
                    <Trigger aria-label="Layers" asChild>
                      <E.Button aria-expanded={state} id={name} size="md" variant="custom" onClick={(e) => handleLayerChange(name)}>
                        {label}
                      </E.Button>
                    </Trigger>
                  </T.Trigger>
                </div>
                {children && (
                  <E.PopoverContent2 size="sm" className="w-30">
                    {children.map((element) => (
                      <label className='block' key={element.name}>
                        <div className='flex text-xs'>
                          <input
                            className='text-xs pl-2'
                            type="checkbox"
                            id={element.name}
                            name={element.name}
                            onChange={(e) => handleCheckboxChange(element.index, e.target.checked)}
                          />
                            <svg height="15px" width="15px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier"><g> 
                                    <path className="st0" d="M349.917,432.716v-0.635H162.472v0.635h-10.544L89.982,512h45.644l13.705-20.233h213.334L376.367,512h45.659 l-61.95-79.284H349.917z M162.558,472.248l13.988-20.648h158.912l13.988,20.648H162.558z"></path> 
                                    <path className="st0" d="M256.002,0C112.749,0,71.397,51.982,71.397,91.663v258.601c0,34.895,28.29,63.216,63.224,63.216h242.765 c34.942,0,63.217-28.321,63.217-63.216V91.663C440.603,51.982,399.259,0,256.002,0z M189.091,56.987h133.815 c8.888,0,16.106,7.21,16.106,16.098c0,8.912-7.218,16.114-16.106,16.114H189.091c-8.889,0-16.098-7.202-16.098-16.114 C172.992,64.197,180.201,56.987,189.091,56.987z M160.275,358.439c-11.093,0-20.084-8.991-20.084-20.084 c0-11.094,8.991-20.084,20.084-20.084c11.093,0,20.084,8.99,20.084,20.084C180.358,349.448,171.368,358.439,160.275,358.439z M241.943,239.278H134.731v-98.064h107.212V239.278z M351.737,358.439c-11.094,0-20.084-8.991-20.084-20.084 c0-11.094,8.99-20.084,20.084-20.084c11.092,0,20.084,8.99,20.084,20.084C371.821,349.448,362.829,358.439,351.737,358.439z M382.047,239.278H270.061v-98.064h111.986V239.278z"></path> 
                                  </g> 
                                </g>
                              </svg>
                          {element.name}
                        </div>
                      </label>
                    ))}
                  </E.PopoverContent2>
                )}
              </Root>
            </T.Root>
          </T.Provider>
        ))}
      </div>
    </div>
    
    </>
  );
}
