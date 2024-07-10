import React, { useRef } from "react";

const BasicUseRefApp = () => {
    const inputElem = useRef('hello');
    const onButtonClick = () => {
        inputElem.current.focus();
    };
    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default BasicUseRefApp;