import axios from 'axios';
import { Map as MaplibreMap } from 'maplibre-gl';

export const Format = {
	JPEG: 'JPEG',
	PNG: 'PNG',
	PDF: 'PDF',
	SVG: 'SVG'
} as const;
type Format = (typeof Format)[keyof typeof Format];

export const Unit = {
	cm: 'cm',
	mm: 'mm'
} as const;
type Unit = (typeof Unit)[keyof typeof Unit];

export const Size = {
	// A0: [1189, 841],
	// A1: [841, 594],
	A2: [594, 420],
	A3: [420, 297],
	A4: [297, 210],
	A5: [210, 148],
	A6: [148, 105],
	// B0: [1414, 1000],
	// B1: [1000, 707],
	B2: [707, 500],
	B3: [500, 353],
	B4: [353, 250],
	B5: [250, 176],
	B6: [176, 125]
} as const;

type Size = (typeof Size)[keyof typeof Size];

export const PageOrientation = {
	Landscape: 'landscape',
	Portrait: 'portrait'
} as const;
type PageOrientation = (typeof PageOrientation)[keyof typeof PageOrientation];

export const DPI = {
	72: 72,
	96: 96,
	200: 200,
	300: 300,
	400: 400
} as const;
type DPI = (typeof DPI)[keyof typeof DPI];

export default class MapGenerator {
	private map: MaplibreMap;

	private width: number;

	private height: number;

	private dpi: number;

	private format: string;

	private unit: Unit;

    public canvasBase64: string;

	/**
	 * Constructor
	 * @param map MaplibreMap object
	 * @param size layout size. default is A4
	 * @param dpi dpi value. deafult is 300
	 * @param format image format. default is PNG
	 * @param unit length unit. default is mm
	 * @param fileName file name. default is 'map'
	 */
	constructor(
		map: MaplibreMap,
		size: number[] = [297, 210],
		dpi = 300,
		format: string = Format.PNG.toString(),
		unit: Unit = Unit.mm,
	) {
		this.map = map;
		this.width = size[0];
		this.height = size[1];
		this.dpi = dpi;
		this.format = format;
		this.unit = unit;
	}

	/**
	 * Generate and download Map image
	 */
	generate() {
		const this_ = this;

		// Calculate pixel ratio
		const actualPixelRatio: number = window.devicePixelRatio;
		Object.defineProperty(window, 'devicePixelRatio', {
			get() {
				return this_.dpi / 96;
			}
		});

		// Create map container
		const hidden = document.createElement('div');
		hidden.className = 'hidden-map';
		document.body.appendChild(hidden);
		const container = document.createElement('div');
		container.style.width = this.toPixels(this.width);
		container.style.height = this.toPixels(this.height);
		hidden.appendChild(container);

		const style = this.map.getStyle();
		if (style && style.sources) {
			const sources = style.sources;
			Object.keys(sources).forEach((name) => {
				const src: any = sources[name];
				Object.keys(src).forEach((key: any) => {
					if (!src[key]) delete src[key];
				});
			});
		}		
		// Render map
		const renderMap = new MaplibreMap({
			container,
			style,
			center: this.map.getCenter(),
			zoom: this.map.getZoom(),
			// bearing: this.map.getBearing(),
			// pitch: this.map.getPitch(),
			interactive: false,
			preserveDrawingBuffer: true,
			fadeDuration: 0,
			attributionControl: false,
			// hack to read transfrom request callback function
			// eslint-disable-next-line
			// @ts-ignore
			transformRequest: (this.map as unknown)._requestManager._transformRequestFn
		});

		return new Promise((resolve, reject) => {
			renderMap.once('idle', () => {
				switch (this_.format) {
					case Format.PDF:
						const dataURL = renderMap.getCanvas().toDataURL('image/png', 1);
						resolve(dataURL);
						break;
					default:
						console.error(`Invalid file format: ${this_.format}`);
						break;
				}
		
				renderMap.remove();
				hidden.parentNode?.removeChild(hidden);
				Object.defineProperty(window, 'devicePixelRatio', {
					get() {
						return actualPixelRatio;
					}
				});
				hidden.remove();
			});
		
		});

	}

		
	/**
	 * Generate and download Map image
	 */
	generateMiniMap() {
		const this_ = this;

		// Calculate pixel ratio
		const actualPixelRatio: number = window.devicePixelRatio;
		Object.defineProperty(window, 'devicePixelRatio', {
			get() {
				return this_.dpi / 96;
			}
		});

		// Create map container
		const hidden = document.createElement('div');
		hidden.className = 'hidden-map';
		document.body.appendChild(hidden);
		const container = document.createElement('div');
		container.style.width = this.toPixels(this.width);
		container.style.height = this.toPixels(this.height);
		hidden.appendChild(container);

		const style = this.map.getStyle();
		if (style && style.sources) {
			const sources = style.sources;
			Object.keys(sources).forEach((name) => {
				const src: any = sources[name];
				Object.keys(src).forEach((key: any) => {
					if (!src[key]) delete src[key];
				});
			});
		}

		
		const response = axios.get("http://200.121.128.47:8080/macrozonas").then((result:any)=> {
			// Render map
			const renderMap = new MaplibreMap({
				container,
				style,
				bounds: result.data.bounds,
				zoom: this.map.getZoom(),
				// bearing: this.map.getBearing(),
				// pitch: this.map.getPitch(),
				interactive: false,
				preserveDrawingBuffer: true,
				fadeDuration: 0,
				attributionControl: false,
				// hack to read transfrom request callback function
				// eslint-disable-next-line
				// @ts-ignore
				transformRequest: (this.map as unknown)._requestManager._transformRequestFn
			});
			return new Promise((resolve, reject) => {
				renderMap.once('idle', () => {
					switch (this_.format) {
						case Format.PDF:
							const dataURL = renderMap.getCanvas().toDataURL('image/png', 1);
							resolve(dataURL);
							break;
						default:
							console.error(`Invalid file format: ${this_.format}`);
							break;
					}
			
					renderMap.remove();
					hidden.parentNode?.removeChild(hidden);
					Object.defineProperty(window, 'devicePixelRatio', {
						get() {
							return actualPixelRatio;
						}
					});
					hidden.remove();
				});
			
			});		
		});
		
		return response
	}


	/**
	 * Convert mm/inch to pixel
	 * @param length mm/inch length
	 * @param conversionFactor DPI value. default is 96.
	 */
	private toPixels(length: number, conversionFactor = 96) {
		if (this.unit === Unit.mm) {
			conversionFactor /= 25.4;
		}
		return `${conversionFactor * length}px`;
	}
}
