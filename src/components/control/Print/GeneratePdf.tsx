import { PDFViewer, Document, Page, Text, View, Image, PDFDownloadLink } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontSize: {
      'sm': ['10px', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      'base': ['11px', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
    },
    extend: {
     
    },
  },
});

export function PdfTemplate({imageBase64, imageMiniBase64}:{imageBase64: any, imageMiniBase64: any}) {
  console.log({imageBase64, imageMiniBase64})
  return (
    <Document>
        <Page size="A4" orientation="landscape" style={tw("p-1 flex flex-row flex-wrap w-full font-bold text-base")}>
          
          <View style={tw("w-3/4 h-full flex-1 flex-col items-center justify-center border-2 border-black")}>
            <Image src={imageBase64}></Image>
          </View>
          
          <View style={tw("w-1/4 h-full flex-col items-center justify-center  border-r-2 border-b-2 border-t-2 border-black")}>
            
            <View style={tw("w-full h-[45%] border-b-2 border-black")}>
              
              <View style={tw("w-full border-b-2 border-black px-4")}>
                <Image src="/web/atu/logo_azzorti.jpg"/>
              </View>

              <View style={tw("w-full px-2 text-center pt-4")}>
                <Text>GERENCIA DE VENTAS TERRITORIOS Y ESTRATEGIA COMERCIAL</Text>          
                
                <View style={tw("w-full  flex items-center justify-center py-2")}>
                  <Image style={tw("h-10")} src="/web/atu/tec-logo.png"/>
                </View>

                <Text>CAMPAÑA: 202404</Text>
                <Text style={tw("text-sm")}>ROMINA DANIELA NORIEGA PURIZAGA</Text>

                <View style={tw("w-full text-left pt-2")}>
                  <Text>REGION: </Text>
                  <Text>ZONA: </Text>
                  <Text>SECTOR: </Text>
                  <Text>DEP: </Text>
                  <Text>PROV: </Text>
                  <Text>DIST: </Text>
                </View>
              </View>
            </View>
            <View style={tw("w-full h-[20%] border-b-2 border-black px-2 pt-4")}>
              <Text>LEYENDA: </Text>
              <Text>STATUS: </Text>
              <View style={tw("px-2 flex flex-row flex-wrap")}>
                <Text>-01</Text>
                <Text>-02</Text>
                <Text>-03</Text>
                <Text>-04</Text>
                <Text>-05</Text>
                <Text>-06</Text>
              </View>
            </View>
            <View style={tw("w-full h-[35%] px-2 pt-4")}>
              <Text>UBICACIÓN DE LA ZONA Y SECTOR</Text>
              <Image style={tw("pt-4")} src={imageMiniBase64} />
            </View>
          </View>
        </Page>
      </Document>
  );
}

// export default function ReturnButtonDownload({imageBase64}:{imageBase64:any}) {
//   return (
//     <PDFDownloadLink document={<PdfTemplate imageBase64={imageBase64} />} fileName="somename.pdf">
//         {({ blob, url, loading, error }) =>
//             loading ? 'Loading document...' : 'Download now!'
//         }
//     </PDFDownloadLink>
//   )
// }