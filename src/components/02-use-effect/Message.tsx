import {useEffect} from "react";

const Message = () => {
    useEffect(() => {
        console.log("componente montado")

        return () => {
            console.log("componentes desmontado")
        }
    }, [])
    return (
        <>
            <h2>Eres genial</h2>
        </>
    )
}

export default Message