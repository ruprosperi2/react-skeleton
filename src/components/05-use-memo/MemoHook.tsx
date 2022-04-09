import UseCounter from "../../hooks/useCounter";
import {useMemo, useState} from "react";

const MemoHook = () => {
    const [show, setShow] = useState(true)
    const {
        state,
        increment,
    } = UseCounter(5000)

    const procesoPesado = (initialValue: number) => {
        // eslint-disable-next-line no-unreachable-loop
        for (let i: number = 0; i <= initialValue; i++) {
            console.log("ay vamos")
        }
    }

    const memoProcesado = useMemo(() => procesoPesado(state), [state])
    return (
        <>
            {memoProcesado}
            <h1>Valor inicial: {state}</h1>
            <button onClick={() => increment()}>Incrementar</button>
            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}

export default MemoHook