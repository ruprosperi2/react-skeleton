import MultipleCustomHooks from "../03-example/MultipleCustomHooks";
import {useState} from "react";

const RealExampleRef = () => {
    const [show, setShow] = useState(false)


    return (
        <>
            <h1>Real example ref</h1>
            <hr/>

            {
                show && <MultipleCustomHooks/>
            }

            <div>
                <button onClick={() => setShow(!show)}>{!show ? 'Mostrar' : 'Ocultar'}</button>
            </div>

        </>
    )
}

export default RealExampleRef