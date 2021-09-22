import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

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
    console.log(errors);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <textarea {...register('message', {
                required: true, minLength: 1, 
            })}
                placeholder={"Напиши своё сообщение"} />
            <span>

            </span>

            <div>
                <button >Send</button>
            </div>
        </form>

    )
}