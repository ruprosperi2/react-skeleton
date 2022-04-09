import { FormEvent} from "react";
import useForm from "../../hooks/useForm";


const FormWithCustomHook = () => {
    const [formState, handleInpuntChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formState

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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

                <input
                    className={"form-control"}
                    name={'password'}
                    onChange={handleInpuntChange}
                    placeholder={"Ingrese su contraseña"}
                    type="password"
                    value={password}
                />
            </div>
            <button className={"btn btn-primary"}>Guardar</button>
        </form>
    )
}

export default FormWithCustomHook