import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SuperButton from "../common/SuperButton/SuperButton";

type FormType = {
    message: string
}

type PropsType = {
    callBack: (text: string) => void
}



export const AddPostForm = (props: PropsType) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormType>({ mode: 'onChange', })
    const onSubmit: SubmitHandler<FormType> = (data) => {
        props.callBack(data.message)
        setValue("message", "")
    }
    


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <textarea {...register('message', {
                required: true, minLength: 1, maxLength: { value: 300, message: 'max length 300' }
            })}
                placeholder={"Напиши своё сообщение"} />
            <span>
                {errors.message?.message}
            </span>

            <div>
                <SuperButton >Send</SuperButton>
            </div>
        </form>

    )
}