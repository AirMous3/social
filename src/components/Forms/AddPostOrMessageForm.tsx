import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


type FormType = {
    message: string
}

type PropsType = {
    callBack: (text: string) => void
}
export const AddPostForm = (props: PropsType) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormType>({ mode: 'onChange' })
    const onSubmit: SubmitHandler<FormType> = (data) => {
        props.callBack(data.message)
        setValue("message", "")
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <textarea {...register('message', { required: false, maxLength: { value: 300, message: 'max length 300' } })}
                placeholder={"Напиши своё сообщение"} /> {errors.message?.type === 'maxLength' && <span>max length 300</span>}

            <div>
                <button >Send</button>
            </div>
        </form>

    )
}