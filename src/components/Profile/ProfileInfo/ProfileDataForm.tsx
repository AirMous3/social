import {useForm} from "react-hook-form";
import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType, updateProfileThunk} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

export type ProfileDataFormProps = {
    updateStatus: (status: string) => void
    status: string
    profile: ProfileType
    isOwner: boolean
    editMode: (value: boolean) => void

}
type FormInputs = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string

}
export const ProfileDataForm = ({updateStatus, status, profile, isOwner, editMode}: ProfileDataFormProps) => {
    let contacts = profile.contacts
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm<FormInputs>()
    const onSubmit = (data: any) => {
        console.log(data)
        editMode(false)
        dispatch(updateProfileThunk(data))
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <b>FullName</b>: <input  {...register("fullName")} />
            </div>
            <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
            <div>
                <b>About me</b>: <input {...register("aboutMe")} />
            </div>

            <div>
                <b>Looking for a job</b>: <input type={'checkbox'} {...register("lookingForAJob")} />
            </div>

            <div>
                <b>My professional skills</b>:
                <div>
                    <textarea style={{width: '264px', height: '100px', resize: 'none'}} {...register('lookingForAJobDescription')} />
                </div>
            </div>


            {/*<div>*/}
            {/*    <b>Contacts</b>:{Object.entries(contacts).map(([key, value], index) => <Contact key={index}*/}
            {/*                                                                                    contact={key}*/}
            {/*                                                                                    contactValue={value}/>)}*/}
            {/*</div>*/}
            <button type={'submit'}>save</button>
        </form>
    );
}