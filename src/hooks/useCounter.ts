import {useState} from "react"

const UseCounter = (initialValue:number) => {
    const [state, setState] = useState(initialValue)

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    return {
        state,
        increment,
        decrement
    }
}

export default UseCounter