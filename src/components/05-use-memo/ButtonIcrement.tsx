import {memo} from "react";

// eslint-disable-next-line react/display-name
const ButtonIcrement = memo(({increment}:{increment:any})=>{
    console.log("me ejecute")
    return (
        <button onClick={()=>increment(5)}>
            Incrementar +1
        </button>
    )
})

export default ButtonIcrement