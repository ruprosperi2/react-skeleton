import {useCallback, useState} from "react";
import ButtonIcrement from "./ButtonIcrement";

const CallbackHook = () => {
    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(true)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback((numb:number)=>{
        setCounter((c:number)=>c+numb)
    }, [setCounter])
    return (
        <>
            <h1>Callback Hook {counter}</h1>
            <ButtonIcrement increment={increment}/>
            <button onClick={()=>setShow(!show)}>Hide/Show {JSON.stringify(show)}</button>
        </>

    )
}

export default CallbackHook