import { StyledLabelSpan, inputClass } from "@/components/elements";
import React from "react";

export function PeriodoEstudio( ){

    const  [year, setYear] = React.useState('2019');
    const  [month, setMonth] = React.useState(['Mayo']);

    React.useEffect(() => {
        switch (year) {
            case '2016':
                setMonth(['Diciembre'])
                break;
            case '2017':
                setMonth(['Febrero', 'Mayo', 'Diciembre']);
                break;
            default:
                setMonth(['Mayo']);
                break;
        }
    }, [year]);


    return (
        <>
        <div className="py-2 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Año:</StyledLabelSpan>
            <select id="drpanio_especif" className={inputClass({ _size: "xs" })} value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="2019">2019</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>                            
            </select>
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Mes:</StyledLabelSpan>
            <select className={inputClass({ _size: "xs" })}>
                {month.map((mes) => (
                    <option key={mes} value={mes}>{mes}</option>
                ))}                  
            </select>
        </div>
    </>
    );
}