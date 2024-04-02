import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function TipoDiaComponent() {

    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_tipo_dia = analytics.tipo_dia
        const updatedTipoDiaList = list_tipo_dia.includes(value)
        ? list_tipo_dia.filter((tipo_dia) => tipo_dia !== value)
        : [...list_tipo_dia, value];
        
        dispatch(
            setPerfilViajero({
            tipo_dia: updatedTipoDiaList,
            })
        );  
    }

    return (
        <>
            <div className="py-1 whitespace-nowrap flex justify-between">
                <StyledLabelSpan size="xs">Lunes</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    checked={analytics.tipo_dia.includes("Lunes")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("Lunes")}}
                    />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">Martes</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    checked={analytics.tipo_dia.includes("Martes")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("Martes")}}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">Miercoles</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    checked={analytics.tipo_dia.includes("Miercoles")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("Miercoles")}}
                    />
                </div><div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">Jueves</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    checked={analytics.tipo_dia.includes("Jueves")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("Jueves")}}
                    />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">Viernes</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    checked={analytics.tipo_dia.includes("Viernes")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("Viernes")}}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                <StyledLabelSpan size="xs">Sabado</StyledLabelSpan>
                <input
                type="checkbox"
                name="from_target_checkbox"
                checked={analytics.tipo_dia.includes("Sabado")}
                className={styledCheckbox({ variant: "default" })}
                onChange={(e) => {onChange("Sabado")}}
                />
                </div><div className="py-1 whitespace-nowrap flex justify-between">
                <StyledLabelSpan size="xs">Domingo</StyledLabelSpan>
                <input
                type="checkbox"
                name="source_to_target_checkbox"
                checked={analytics.tipo_dia.includes("Domingo")}
                className={styledCheckbox({ variant: "default" })}
                onChange={(e) => {onChange("Domingo")}}
                />
                </div>
                </>
    );
}