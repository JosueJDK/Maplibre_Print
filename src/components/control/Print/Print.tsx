import React from "react";
import { Button, StyledLabelSpan, inputClass } from "../../elements";
import { PdfTemplate } from "./GeneratePdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

export function PrintPopover({printConfig, setPrintConfig, onClickPrintMap}) {
  const [imageBase64, setImageBase64] = React.useState(null)
  const [imageMiniBase64, setImageMiniBase64] = React.useState(null)

  const onChangeSelected = (key, value) => {
      setPrintConfig({
        ...printConfig,
        [key]: value
      });
    };
      
  return (
    <div>
      <div className="overflow-y-auto text-sm flex flex-col items-center justify-center w-full" style={{maxHeight: 300}}>
        <div className="w-full py-2 whitespace-nowrap flex space-x-4 justify-between px-1">
            <StyledLabelSpan size="xs">Tamaño:</StyledLabelSpan>
            <select id="mapbox-gl-export-page-size" defaultValue={JSON.stringify(printConfig.page_size)} className={`${inputClass({ _size: "xxs", width: "w-28" })}`} onChange={(e) => onChangeSelected("page_size", JSON.parse(e.target.value))}>
                <option value="[297,210]">A4</option>
                <option value="[420,297]">A3</option>                       
            </select>
        </div>
        <div className="w-full py-2 whitespace-nowrap flex space-x-4 justify-between px-1">
            <StyledLabelSpan size="xs">Orientacion:</StyledLabelSpan>
            <select id="mapbox-gl-export-page-orientation" defaultValue={printConfig.page_orientation} className={`${inputClass({ _size: "xxs", width: "w-28" })}`} onChange={(e) => onChangeSelected("page_orientation", e.target.value)}>
                <option value="landscape">Horizonal</option>
                <option value="portrait">Vertical</option>                   
            </select>
        </div>
        <div className="w-full py-2 whitespace-nowrap flex space-x-4 justify-between px-1">
            <StyledLabelSpan size="xs">Formato:</StyledLabelSpan>
            <select id="drpanio_especif" defaultValue={printConfig.format} className={`${inputClass({ _size: "xxs", width: "w-28" })}`} onChange={(e) => {}}>
                <option value="PDF">PDF</option>
                <option value="JPG">JPG</option>
                <option value="PNG">PNG</option>                            
            </select>
        </div>
        <div className="w-full py-2 whitespace-nowrap flex space-x-4 justify-between px-1">
            <StyledLabelSpan size="xs">DPI:</StyledLabelSpan>
            <select id="drpanio_especif" defaultValue={printConfig.dpi} className={`${inputClass({ _size: "xxs", width: "w-28" })}`} onChange={(e) => {}}>
                <option value="72">72</option>
                <option value="96">96</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>                            
            </select>
        </div>
        <Button onClick={() => onClickPrintMap(setImageBase64, setImageMiniBase64)} className="my-2">Generar PDF</Button>
        {imageBase64 !== null && imageMiniBase64 !== null && (
          <PDFDownloadLink document={<PdfTemplate imageBase64={imageBase64} imageMiniBase64={imageMiniBase64}/>} fileName="somename.pdf">
              {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download now!'
              }
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}
  