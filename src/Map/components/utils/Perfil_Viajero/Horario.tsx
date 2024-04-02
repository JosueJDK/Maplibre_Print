import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function HorarioComponent() {
    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_horario = analytics.horario
        const updatedHorarioList = list_horario.includes(value)
        ? list_horario.filter((horario) => horario !== value)
        : [...list_horario, value];
        
        dispatch(
            setPerfilViajero({
                horario: updatedHorarioList,
            })
        )
    }

    return (
        <>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">0 a 6</StyledLabelSpan>
                <input
                type="checkbox"
                name="from_source_checkbox"
                checked={analytics.horario.includes("0 a 6")}
                className={styledCheckbox({ variant: "default" })}
                onChange={(e) => {onChange("0 a 6")}}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">6 a 9</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_target_checkbox"
            checked={analytics.horario.includes("6 a 9")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("6 a 9")}}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">9 a 11</StyledLabelSpan>
            <input
            type="checkbox"
            name="source_to_target_checkbox"
            checked={analytics.horario.includes("9 a 11")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("9 a 11")}}
            />
        </div>

        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">11 a 13</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_source_checkbox"
            checked={analytics.horario.includes("11 a 13")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("11 a 13")}}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">13 a 15</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_target_checkbox"
            checked={analytics.horario.includes("13 a 15")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("13 a 15")}}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">15 a 17</StyledLabelSpan>
            <input
            type="checkbox"
            name="source_to_target_checkbox"
            checked={analytics.horario.includes("15 a 17")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("15 a 17")}}
            />
        </div>

        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">17 a 19</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_source_checkbox"
            checked={analytics.horario.includes("17 a 19")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("17 a 19")}}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">19 a 21</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_target_checkbox"
            checked={analytics.horario.includes("19 a 21")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("19 a 21")}}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">21 a 0</StyledLabelSpan>
            <input
            type="checkbox"
            name="source_to_target_checkbox"
            checked={analytics.horario.includes("21 a 0")}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {onChange("21 a 0")}}
            />
        </div>
    </>
    );
}