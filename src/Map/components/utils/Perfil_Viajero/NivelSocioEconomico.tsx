import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function NivelSocioEconomicoComponent() {

    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_nse = analytics.nse
        const updatedNivelSocioEconomicoList = list_nse.includes(value)
        ? list_nse.filter((nse) => nse !== value)
        : [...list_nse, value];
        
        dispatch(
            setPerfilViajero({
            nse: updatedNivelSocioEconomicoList,
            })
        );  
    }

    return (
        <>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">A</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        checked={analytics.nse.includes("ALTO")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("ALTO")}}
                        />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">B</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        checked={analytics.nse.includes("MEDIO ALTO")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("MEDIO ALTO")}}
                        />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">C</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        checked={analytics.nse.includes("MEDIO")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("MEDIO")}}
                        />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">D</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    checked={analytics.nse.includes("MEDIO BAJO")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("MEDIO BAJO")}}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">E</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    checked={analytics.nse.includes("BAJO")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("BAJO")}}
                    />
                </div>
        </>
    );
}