import React from "react";
import { StyledLabelSpan, inputClass } from "@/components/elements";
import Fuse from 'fuse.js';
import { data_input } from "@/Map/constants/input.data.constants";
import { clsx } from "clsx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLineasDeseo } from "@/redux/features/analyticsSlice";
import { addLayers, removeAllLayers } from "@/redux/features/layersSlice";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { resetArc } from "@/redux/features/arcSlice";
import { delete_layers, delete_source } from "@/Map/map_functions/layers_map";
import { resetCheckedStates, setCheckedStates } from "@/redux/features/layersGeoserver";

export function InputSearch({ label, disable=false, placeholder='', type='', source_to_target=false }: { label: string, disable?: boolean, placeholder?: string, type?: string, source_to_target?: boolean }) {
    const dispatch = useAppDispatch();

    const [showResult, setShowResult] = React.useState([]);
    const layers = useAppSelector((state) => state.layersReducer.layers);
    const mapRef = useAppSelector((state) => state.mapReducer.mapRef);

    const layersGeoserver = useAppSelector((state) => state.layersGeoserverReducer);
    const analytics = useAppSelector((state) => state.analyticsReducer);

    const fuseOptions = {
        includeScore: true,
        keys: ["denominacion"],
        threshold: 0.3,
    };

    const handleOptionClick = (item, type) => {
        dispatch(resetArc())
        setShowResult([]);
        dispatch(setLineasDeseo({
            [type === 'source' ? 'source_id' : 'target_id']: parseInt(item.id), 
            type_source: item.tipo === 'macrozonas' ? 'taz_macro_o' : item.tipo === 'mesozonas' ? 'taz_meso_o' :  item.tipo === 'microzonas' ? 'taz_micro_o' : item.tipo === 'distritos' ? 'taz_dist_o' : '',
            type_target: item.tipo === 'macrozonas' ? 'taz_macro_d' : item.tipo === 'mesozonas' ? 'taz_meso_d' :  item.tipo === 'microzonas' ? 'taz_micro_d' : item.tipo === 'distritos' ? 'taz_dist_d' : '',
            type: item.tipo === 'macrozonas' ? 'macrozonas' : item.tipo === 'mesozonas' ? 'mesozonas' :  item.tipo === 'microzonas' ? 'microzonas' : item.tipo === 'distritos' ? 'distritos' : '',
            [type === 'source' ? 'value_source' : 'value_target']: item.denominacion,
        }))

        const layerDetails = layersGeoserver[item.tipo];
        dispatch(resetCheckedStates())
        dispatch(setCheckedStates({name: item.tipo, checked: !layerDetails.state}))
        
        // DELETE LAYERS MAP
        delete_layers({mapRef, layers})
        delete_source({mapRef, sources: layers})
        dispatch(removeAllLayers())
        dispatch(resetArc())
        dispatch(removeAllLayersDeck())
        
        // ADD LAYERS MAP
        dispatch(addLayers(layerDetails.layers))
        layerDetails.layers.map((layer) => {
            mapRef.getMap().addLayer(layer);
        })
    };
    
    const handleOnchangeInput = (event) => {
        const { value } = event.target;
        dispatch(setLineasDeseo({ [type === 'source' ? 'value_source' : 'value_target']:value}))

        const searchInType = (typeData) => {
            const fuse = new Fuse(typeData.data, fuseOptions);
            return fuse.search(value).slice(0, 5).map((result: any) => ({...result.item, type: typeData.tipo}));
        };

        const combinedResults = [
            ...searchInType(data_input.macrozonas),
            ...searchInType(data_input.distritos),
            ...searchInType(data_input.mesozonas),
            ...searchInType(data_input.microzonas)
        ];
        setShowResult(combinedResults);
    };

    const renderListItems = (tipo, title) => {
        const filteredItems = showResult.filter(item => item.tipo === tipo);
        return filteredItems.length > 0 ? (
            <>
                <h1 className="px-2">{title}</h1>
                {filteredItems.map((item, index) => (
                    <li
                        key={index}
                        className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-xs"
                        onClick={() => handleOptionClick(item, type)}
                    >
                        {item.denominacion}
                    </li>
                ))}
            </>
        ) : null;
    };

    return (
        <>
            <div className="relative">
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">{label}</StyledLabelSpan>
                    <input
                        type="text"
                        name="source_input"
                        value={type === 'source' ? (analytics.lineas_deseo.value_source || '') : (analytics.lineas_deseo.value_target || '')}
                        disabled={disable}
                        placeholder={placeholder}
                        className={clsx(disable ? "cursor-not-allowed" : "cursor-text", inputClass({ _size: "xs" }))}
                        onChange={handleOnchangeInput}
                    />
                </div>
                <div className="result-search">
                    {showResult.length > 0 && (
                        <ul className="absolute z-50 bg-white border border-gray-100 rounded w-full shadow-lg">
                            {!source_to_target ? (
                                <>
                                    {renderListItems("macrozonas", data_input.macrozonas.title)}
                                    {renderListItems("distritos", data_input.distritos.title)}
                                    {renderListItems("mesozonas", data_input.mesozonas.title)}
                                    {renderListItems("microzonas", data_input.microzonas.title)}
                                </>
                            ) : (
                                renderListItems(analytics.lineas_deseo.type, data_input[analytics.lineas_deseo.type].title)
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
