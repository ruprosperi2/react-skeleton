import {ChangeEvent, useEffect, useState} from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect(() => {
    }, [])

    useEffect(() => {
    }, [name])

    useEffect(() => {
    }, [email])

    const handleInpuntChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h1>Simple form</h1>
            <hr/>
            <div className={"form-group"}>
                <input
                    autoComplete={"off"}
                    className={"form-control"}
                    name={'name'}
                    onChange={handleInpuntChange}
                    placeholder={"Ingrese su nombre"}
                    type="text"
                    value={name}
                />

                <input
                    autoComplete={"off"}
                    className={"form-control"}
                    name={'email'}
                    onChange={handleInpuntChange}
                    placeholder={"Ingrese su correo"}
                    type="text"
                    value={email}
                />
            </div>

            {(name === "123") && <Message/>}
        </>
    )
}

export default SimpleForm