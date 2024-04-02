export function delete_layers({mapRef, layers} : {mapRef : any, layers: any}) {
    layers.length !== 0 && layers.map((layer) => {        
        mapRef.getMap().removeLayer(layer.id);            
    })
}

export function delete_source({mapRef, sources} : {mapRef : any, sources: any}) {
    sources.length !== 0 && sources.map((layer) => {        
        mapRef.getMap().removeSource(layer.id);            
    })
}