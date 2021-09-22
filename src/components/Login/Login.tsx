import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/loginReducer";
import s from "./Login.module.css"

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
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} >
            <div>
                <input className={s.input} {...register('login', { required: true, maxLength: { value: 30, message: 'max length 30' } })}
                    type="text" placeholder={"your login"} />

                {errors.login?.type === 'required' && <div className={s.errorMessage} >required field</div>}
                {errors.login?.type === 'maxLength' && <div className={s.errorMessage}>max length 30</div>}
            </div>
            <div>
                <input className={s.input} {...register('password', { required: true, maxLength: { value: 100, message: 'max length 100' } })}
                    type="password" placeholder={'your password'} />

                {errors.password?.type === 'required' && <div className={s.errorMessage}>required field</div>}
                {errors.password?.type === 'maxLength' && <div className={s.errorMessage}>max length 100</div>}
            </div>
            <div>
                <button className={s.button}>Login</button>
                <input {...register('rememberMe')} type="checkBox" /> remember me
            </div>
            <div>

            </div>

        </form>
    )
}