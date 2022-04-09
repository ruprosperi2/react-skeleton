import {ChangeEvent, useState} from "react";

const useForm = (initialValue?: { password: string; name: string; email: string }) => {
    const [state, setState] = useState(initialValue)

    const handleInpuntChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            email: "", name: "", password: "",
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return [state, handleInpuntChange]
}

export default useForm