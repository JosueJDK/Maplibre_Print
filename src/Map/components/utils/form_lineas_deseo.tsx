import { InputSearch } from "@/Map/components/utils/InputSearch"
import { StyledLabelSpan, styledCheckbox } from "@/components/elements"
import { resetLineasDeseo, setLineasDeseo } from "@/redux/features/analyticsSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react"

export function LineasDeseo() {
    const dispatch = useAppDispatch();

    const [lineasDeseo, _setLineasDeseo] = React.useState({
        from_source_checkbox: true, 
        from_target_checkbox: false, 
        source_to_target_checkbox: false,
        inputSource: {
            disable: false
        },
        inputTarget: {
            disable: true
        }
    })

    return (
        <>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Desde un Origen</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_source_checkbox"
            checked={lineasDeseo.from_source_checkbox}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {
                dispatch(setLineasDeseo({value_target: ""}))
                _setLineasDeseo({
                    from_source_checkbox: true, 
                    from_target_checkbox: false, 
                    source_to_target_checkbox: false,
                    inputSource: {
                        disable: false
                    },
                    inputTarget: {
                        disable: true
                    }
                })
            }}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Hacia un Destino</StyledLabelSpan>
            {/* <input
            type="checkbox"
            name="from_target_checkbox"
            checked={lineasDeseo.from_target_checkbox}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {
                dispatch(setLineasDeseo({value_source: null, source_id: null}))
                _setLineasDeseo({
                    from_source_checkbox: false, 
                    from_target_checkbox: true, 
                    source_to_target_checkbox: false,
                    inputSource: {
                        disable: true
                    },
                    inputTarget: {
                        disable: false
                    }
                })
            }}
            /> */}
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Orígen a Destino</StyledLabelSpan>
            <input
            type="checkbox"
            name="source_to_target_checkbox"
            checked={lineasDeseo.source_to_target_checkbox}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {   
                dispatch(resetLineasDeseo())             
                _setLineasDeseo({
                    from_source_checkbox: false, 
                    from_target_checkbox: false, 
                    source_to_target_checkbox: true,
                    inputSource: {
                        disable: false
                    },
                    inputTarget: {
                        disable: false
                    }
                })
            }}
            />
        </div>

        <div>
            <InputSearch label={"Origen"} placeholder={"Ingrese Origen"} disable={lineasDeseo.inputSource.disable} type={'source'}/>
        </div>
        <div>
            <InputSearch label={"Destino"} placeholder={"Ingrese Destino"} disable={lineasDeseo.inputTarget.disable} type={'target'} source_to_target={lineasDeseo.source_to_target_checkbox}/>
        </div>
    </>
    )
}