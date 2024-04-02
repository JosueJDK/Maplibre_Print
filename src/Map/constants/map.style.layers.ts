export const mapLayersStyleGeoserver = {
  macrozonas: {
    id:"vt_macrozonas",
    state: false,
    layer: "macrozonas",
    label: "Macrozonas",
    children: false,
    layers: [
      {
        id: 'macrozonas-points-label',
        type: 'symbol',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/macrozonas_points/{z}/{x}/{y}']
        },
        "source-layer": "macrozonas_points",
        layout: {
          "text-field": "{name}",
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        },
        paint: {
          "text-color": "#FF0000",
        },
        minzoom: 3,
        maxzoom: 18
      },      
      {
        id: 'macrozonas-outline',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/macrozonas/{z}/{x}/{y}']
        },
        'source-layer': 'macrozonas',
        paint: {
          "line-color": "#FF0000",
          "line-width": 3
        }
      },
      {
        id: 'macrozonas-outline-selected',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/macrozonas/{z}/{x}/{y}']
        },
        "source-layer": "macrozonas",
        filter: ['in', 'taz', ''],
        paint: {
          "line-color": "#94F14B",
          "line-width": 3
        }
      },
      {
        id: 'macrozonas',
        type: 'fill',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/macrozonas/{z}/{x}/{y}']
        },
        'source-layer': 'macrozonas',
        paint: {
          "fill-color": "rgba(226, 244, 195, 0)",
        }
      },
    ]
  },
  distritos: {
    id:"vt_distritos",
    state: false,
    layer: "distritos",
    label: "Distritos",
    children: false,
    layers: [
      {
        id: 'distritos-points-label',
        type: 'symbol',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/distritos_points/{z}/{x}/{y}']
        },
        "source-layer": "distritos_points",
        layout: {
          "text-field": "{name}",
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        },
        paint: {
          "text-color": "#2255CA",
        },
        minzoom: 3,
        maxzoom: 18
      },
      {
        id: 'distritos-outline',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/distritos/{z}/{x}/{y}']
        },
        'source-layer': 'distritos',
        paint: {
          "line-color": "#2255CA",
          "line-width": 1
        }
      },      
      {
        id: 'distritos-outline-selected',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/distritos/{z}/{x}/{y}']
        },
        "source-layer": "distritos",
        filter: ['in', 'taz', ''],
        paint: {
          "line-color": "#94F14B",
          "line-width": 3
        }
      },
      {
        id: 'distritos',
        type: 'fill',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/distritos/{z}/{x}/{y}']
        },
        'source-layer': 'distritos',
        paint: {
          "fill-color": "rgba(226, 244, 195, 0)",
        }
      },
    ]
  },
  mesozonas: {
    id:"vt_mesozonas",
    state: false,
    layer: "mesozonas",
    label: "Mesozonas",
    children: false,
    layers: [      
      {
        id: 'mesozonas-points-label',
        type: 'symbol',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/mesozonas_points/{z}/{x}/{y}']
        },
        "source-layer": "mesozonas_points",
        layout: {
          "text-field": "{taz}",
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        },
        paint: {
          "text-color": "#D319CD",
        },
        minzoom: 3,
        maxzoom: 18
      },
      {
        id: 'mesozonas-outline',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/mesozonas/{z}/{x}/{y}']
        },
        'source-layer': 'mesozonas',
        paint: {
          "line-color": "#D6BBBB",
          "line-width": 1
        }
      },
      {
        id: 'mesozonas-outline-selected',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/mesozonas/{z}/{x}/{y}']
        },
        "source-layer": "mesozonas",
        filter: ['in', 'taz', ''],
        paint: {
          "line-color": "#94F14B",
          "line-width": 3
        }
      },
      {
        id: 'mesozonas',
        type: 'fill',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/mesozonas/{z}/{x}/{y}']
        },
        'source-layer': 'mesozonas',
        paint: {
          "fill-color": "rgba(226, 244, 195, 0)",
        }
      },
    ]    
  },
  microzonas: {
    id:"vt_microzonas",
    id_label:"vt_microzonas_label",
    state: false,
    layer: "microzonas",
    label: "Microzonas",
    children: false,
    layers : [      
      {
        id: 'microzonas-points-label',
        type: 'symbol',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/microzonas_points/{z}/{x}/{y}']
        },
        "source-layer": "microzonas_points",
        layout: {
          "text-field": "{taz}",
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        },
        paint: {
          "text-color": "#EC3F3F",
        },
        minzoom: 3,
        maxzoom: 18
      },
      {
        id: 'microzonas-outline',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/microzonas/{z}/{x}/{y}']
        },
        'source-layer': 'microzonas',
        paint: {
          "line-color": "#EC3F3F",
          "line-width": 2
        },
      },
      {
        id: 'microzonas-outline-selected',
        type: 'line',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/microzonas/{z}/{x}/{y}']
        },
        "source-layer": "microzonas",
        filter: ['in', 'taz', ''],
        paint: {
          "line-color": "#94F14B",
          "line-width": 3
        }
      },
      {
        id: 'microzonas',
        type: 'fill',
        source: {
          type: 'vector',
          tiles: ['http://200.121.128.47:8080/microzonas/{z}/{x}/{y}']
        },
        'source-layer': 'microzonas',
        paint: {
          "fill-color": "rgba(226, 244, 195, 0)",
        }
      },
    ]
  },
  sistema_masivo: {
    id:"vt_sistema_masivo",
    state: false,
    layer: "sistemas_masivos",
    label: "Sistema masivo",
    children: [
      {
        name: "Corredor Carretera Central",
        index: [8],
      },
      {
        name: "Corredor Javier Prado",
        index: [9],
      },
      {
        name: "Corredor Panamericana",
        index: [10],
      },
      {
        name: "Corredor San Juan de Lurigancho",
        index: [11],
      },
      {
        name: "Corredor TGA",
        index: [12],
      },
      {
        name: "Línea Metro 1",
        index: [0],
      },
      {
        name: "Línea Metro 2",
        index: [1],
      },
      {
        name: "Línea Metro 3",
        index: [2],
      },
      {
        name: "Línea Metro 4",
        index: [3, 4],
      },
      {
        name: "Línea Metro 5",
        index: [6],
      },
      {
        name: "Línea Metro 6",
        index: [5],
      },
      {
        name: "Metropolitano",
        index: [7],
      },
    ],
    layers : [
        {
          "id": "sistemas-masivos",
          "type": "line",
          source: {
            type: 'vector',
            tiles: ['http://200.121.128.47:8080/sistemas_masivos/{z}/{x}/{y}']
          },
          "source-layer": "sistemas_masivos",
          filter: ["in", 'index', ''],
          "paint": {
            "line-width": 3.7857142857142856,
            "line-opacity": 1.0,
            "line-color": {
              "property": "NOMBRE",
              "type": "categorical",
              "stops": [
                ["Corredor Carretera Central", "#aae036"],
                ["Corredor Javier Prado", "#9a7ae5"],
                ["Corredor Panamericana", "#dbaa7e"],
                ["Corredor San Juan de Lurigancho - Brasil", "#2dd18f"],
                ["Corredor Tacna - Garcilaso - Arequipa", "#c579e0"],
                ["Línea Metro 1", "#eada61"],
                ["Línea Metro 2", "#2237d6"],
                ["Línea Metro 3", "#19cacd"],
                ["Línea Metro 4", "#E8518E"],
                ["Línea Metro 4 - Ramal Faucett - Gambetta", "#E8518E"],
                ["Línea Metro 5 de la RBML", "#4b96d3"],
                ["Línea Metro 6 de la RBML", "#ec3d37"],
                ["Metropolitano", "#e8518d"]
              ]
            }
          },
          // "filter": ["in", "NOMBRE", "Corredor Carretera Central", "Corredor Javier Prado", "Corredor Panamericana", "Corredor San Juan de Lurigancho - Brasil", "Corredor Tacna - Garcilaso - Arequipa", "Línea Metro 1", "Línea Metro 2", "Línea Metro 3", "Línea Metro 4", "Línea Metro 4 - Ramal Faucett - Gambetta", "Línea Metro 5 de la RBML", "Línea Metro 6 de la RBML", "Metropolitano"]
        },
        // {
        //   id: 'sistemas_masivos_points-outline',
        //   type: 'circle',
        //   source: {
        //     type: 'vector',
        //     tiles: ['http://200.121.128.47:8080/sistemas_masivos_points/{z}/{x}/{y}']
        //   },
        //   "source-layer": "sistemas_masivos_points",
        //   "paint": {
        //     "circle-color": "hsla(0,0%,0%,0.75)",
        //     "circle-stroke-width": 1.5,
        //     "circle-stroke-color": "white",
        //   }
        // }
      ],
  },
}