import {useEffect, useRef, useState} from "react";
import axios from "axios";

const useFetch = (url: string) => {
    const isMounted = useRef(true)
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        axios.get(url).then(resp => {
            const phrases = resp.data

            if (isMounted.current) {
                setState({
                    data: phrases,
                    loading: false,
                    error: null
                })
            }

        })
    }, [url])

    return state
}

export default useFetch