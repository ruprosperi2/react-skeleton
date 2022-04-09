import UseCounter from "../../hooks/useCounter";
import Small from "./Small";
import {useState} from "react";

const Memorize = () => {
    const [show, setShow] = useState(true)
    const {
        state,
        increment,
    } = UseCounter(1)
    return (
        <>
            <Small initialValue={state}/>
            <button onClick={()=>increment()}>Incrementar</button>
            <button onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}

export default Memorize