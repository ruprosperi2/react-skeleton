import {memo} from "react";

// eslint-disable-next-line react/display-name
const Small = memo(({initialValue}: { initialValue: number }) => {
    console.log("he cambiado")
    return (
        <h1>Valor inicial: {initialValue}</h1>
    )
})

export default Small