import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

export default function Genero() {
    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_genero = analytics.genero
        const updatedGeneroList = list_genero.includes(value)
        ? list_genero.filter((genero) => genero !== value)
        : [...list_genero, value];
        
        dispatch(
            setPerfilViajero({
                genero: updatedGeneroList,
            })
        )
    }

    return (
        <>
                <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Masculino</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        checked={analytics.genero.includes("Masculino")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("Masculino")}}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Femenino</StyledLabelSpan>
                        <input
                        type="checkbox"
                        checked={analytics.genero.includes("Femenino")}
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("Femenino")}}
                        />
                </div>
            </>
    );
}