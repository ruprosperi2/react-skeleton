import { useState } from "react"
import "./CounterApp.css"

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const { counter1, counter2 } = state
  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>

      <button
        className={"btn btn-primary"}
        onClick={() => setState({
          ...state,
          counter1: counter1 + 1
        })}
      >+1
      </button>
    </>
  )
}

export default CounterApp