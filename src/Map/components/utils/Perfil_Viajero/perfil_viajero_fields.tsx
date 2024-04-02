import { BackpackIcon, CalendarIcon, ClockIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import HorarioComponent from "./Horario";
import EdadComponent from "./Edad";
import TipoDiaComponent from "./TipoDia";
import NivelSocioEconomicoComponent from "./NivelSocioEconomico";
import MotivoViaje from "./MotivoViaje";
import Genero from "./Genero";
import Image from "next/image";

export const collapsiblePerfilViajero = [
    {
        id: "sub-001",
        title: "Horario (24 horas):",
        icon: (
            <ClockIcon /> 
        ),
        children: (
            <HorarioComponent />
        )
    },
    {
        id: "sub-002",
        title: "Edad (años):",
        icon: (
            <PersonIcon /> 
        ),
        children: (
           <EdadComponent />
        )
    },
    {
        id: "sub-003",
        title: "Nivel Socio Economico:",
        icon: (
            <HomeIcon /> 
        ),
        children: (
            <NivelSocioEconomicoComponent />
        )
    },
    {
        id: "sub-004",
        title: "Tipo de dia:",
        icon: (
            <CalendarIcon /> 
        ),
        children: (
            <TipoDiaComponent />
        )
    },
    {
        id: "sub-005",
        title: "Motivo de Viaje:",
        icon: (
            <BackpackIcon /> 
        ),
        children: (
            <MotivoViaje />
        )
    },
    {
        id: "sub-006",
        title: "Genero:",
        icon: (
            <Image width={20} height={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nK3Uu0oeURSG4UcSCEhEu4BgIwQVD3jstPOEvTamD+gN2KkEIgg2tp7AA3gDaqk2MZ14Si7CWxAiG5awGXT+wT8vTLH23vPNWt9ae3g/bRjKnj51soo/eMK/eLr8B0bwGILdVV/qxA8cYRNTsd6D+xB9qiq4gl+YD68msYvTEOuJcw9VBBexjw+v7M3ipPDh1jKxT2F6I5reOLOHCRVowBi2Il7DBfoL56bD01KWo9QZrGfrvbjFQLY2iIMysa5owEe0Fzx6Eb3M4m/hXemwfs/iyxDJSd39Gh7foaNMMKU/nMWpvJuC6EbMYfJvSQ02Y85y+qIhxxFvY1RFZrDzxl6asc/4G+WqOi7nmHtlLzXqEAu1RFpwhS/Z3TyLoZ2K65a6+TtGqhLTuC7czXH8jB/Caq1uKpBEkjdJNGVaF81ZZinTVH5dpEYk0ReSp+/mGTslPQRpgq07AAAAAElFTkSuQmCC" alt="logo_gender"/>
        ),
        children: (
            <Genero />
        )
    }
];
