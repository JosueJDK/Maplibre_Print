import distritos from "../data/distritos.json"
import macrozonas from "../data/macrozonas.json"
import mesozonas from "../data/sectores.json"
import microzonas from "../data/microsectores.json"

export const data_input = {
    macrozonas: {
        id: "macrozonas", 
        data: macrozonas,
        title: 'Macrozonas'
        
    },
    distritos: {
        id: "distrito", 
        data: distritos,
        title: 'Distritos'
    },
    mesozonas: {
        id: "mesozonas", 
        data: mesozonas,
        title: 'Mesozonas'
        
    },
    microzonas: {
        id: "microzonas", 
        data: microzonas,
        title: 'Microzonas'
        
    }
}