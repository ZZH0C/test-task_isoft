import React,{useCallback} from "react";
import {observer} from "mobx-react-lite";


export const OurModalWindow = observer(({ state }) => {
    const onClick = useCallback(() => {
        state.closeModal();
    }, []);


    return (
        <div className={state.value.className}>
            Здравствуйте, {state.value.nameData} {state.value.surnameData}
            <button onClick={onClick}>Close</button>
        </div>
    );
})

export default {OurModalWindow}
