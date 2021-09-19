import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/loginReducer";

export const Login = () => {
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm />
        </div>
    )
}


type FormType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>({ mode: 'onChange' })
    const onSubmit: SubmitHandler<FormType> = (data) => dispatch(login(data.login, data.password, data.rememberMe))

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <input {...register('login', { required: true, maxLength: { value: 30, message: 'max length 30' } })}
                    type="text" placeholder={"your login"} />

                {errors.login?.type === 'required' && <span>required field</span>}
                {errors.login?.type === 'maxLength' && <span>max length 30</span>}
            </div>
            <div>
                <input {...register('password', { required: true, maxLength: { value: 100, message: 'max length 100' } })}
                    type="text" placeholder={'your password'} />

                {errors.password?.type === 'required' && <span>required field</span>}
                {errors.password?.type === 'maxLength' && <span>max length 100</span>}
            </div>
            <div>
                <input {...register('rememberMe')} type="checkBox" /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}