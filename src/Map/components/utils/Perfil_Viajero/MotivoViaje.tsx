import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function MotivoViaje() {

    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_motivo = analytics.motivo
        const updatedMotivoViajeList = list_motivo.includes(value)
        ? list_motivo.filter((motivo) => motivo !== value)
        : [...list_motivo, value];
        
        dispatch(
            setPerfilViajero({
            motivo: updatedMotivoViajeList,
            })
        );  
    }

    return (
        <>        
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">A Casa</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        checked={analytics.motivo.includes("A casa")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("A casa")}}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Al Trabajo</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        checked={analytics.motivo.includes("A trabajo")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("A trabajo")}}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Otros</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        checked={analytics.motivo.includes("Otros")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("Otros")}}
                        />
                    </div>
            </>
    );
}