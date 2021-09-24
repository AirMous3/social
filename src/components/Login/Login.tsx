import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import s from "./Login.module.css";

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
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>({ mode: 'onTouched' })
    const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);




    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} >

            <div>
                <input className={`${s.input} ${errors.login ? s.inputError : ""} `} {...register('login', {
                    required: { value: true, message: 'required field' },
                    maxLength: { value: 30, message: 'max length 30' }
                })}
                    type="text" placeholder={"your login"} />

                <div className={s.errorMessage}>
                    {errors.login?.message}
                </div>
            </div>
            <div>
                <input className={`${s.input} ${errors.password ? s.inputError : ""} `} {...register('password', {
                    required: { value: true, message: 'required field' },
                    maxLength: { value: 100, message: 'max length 100' }
                })}
                    type="password" placeholder={'your password'} />

                <div className={s.errorMessage}>
                    {errors.password?.message}
                </div>
            </div>

            <div>
                <button className={s.button}>Login</button>
                <input className={s.checkBox} {...register('rememberMe')} type="checkBox" /> remember me
            </div>


        </form>
    )
}