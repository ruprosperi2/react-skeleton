import useFetch from "../../hooks/useFetch";
import "../01-useState/CounterApp.css"
import UseCounter from "../../hooks/useCounter";

const MultipleCustomHooks = () => {
    const {state, increment} = UseCounter(1)
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)


    // @ts-ignore
    const {author, quote} = !!data && data[0]

    return (
        <>
            <h1>Frases de Breakin Bad</h1>

            {
                (loading)

                    ? <div className={"alert alert-info text center"}>
                        loading...
                    </div>

                    : <blockquote className={"blockquote text-right"}>
                        <p className={"mb-6"}>
                            {quote}
                        </p>
                        <footer className={"blockquote-footer"}> {author}</footer>
                    </blockquote>
            }

            <button
                className={"btn btn-primary"}
                onClick={increment}
            >Siguiente
            </button>

        </>
    )
}

export default MultipleCustomHooks