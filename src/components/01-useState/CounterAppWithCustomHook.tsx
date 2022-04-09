import "./CounterApp.css"
import UseCounter from "../../hooks/useCounter"

const CounterAppWithCustomHook = () => {
  const { state, increment, decrement } = UseCounter(4)
  return (
    <>
      <h2>{state}</h2>
      <button
        className={"btn"}
        onClick={increment}
      >+1
      </button>
      <button
        className={"btn"}
        onClick={decrement}>-1
      </button>
    </>
  )
}

export default CounterAppWithCustomHook