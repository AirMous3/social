import {useForm} from "react-hook-form";
import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType, updateProfileThunk} from "../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/reduxStore";
import SuperButton from "../../common/SuperButton/SuperButton";
import s from './ProfileInfo.module.css'


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
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

}
export const ProfileDataForm = ({updateStatus, status, profile, isOwner, editMode}: ProfileDataFormProps) => {
    let contacts = profile.contacts

    const fullName = useSelector<AppStoreType, string>((state) => state.profilePage.profile.fullName)
    const aboutME = useSelector<AppStoreType, string>((state) => state.profilePage.profile.aboutMe)
    const lookingForaJob = useSelector<AppStoreType, boolean>((state) => state.profilePage.profile.lookingForAJob)
    const lookingForaJobDescription = useSelector<AppStoreType, string>((state) => state.profilePage.profile.lookingForAJobDescription)
    const userContacts = useSelector((state: AppStoreType) => state.profilePage.profile.contacts)

    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm<FormInputs>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            fullName: fullName,
            aboutMe: aboutME,
            lookingForAJob: lookingForaJob,
            lookingForAJobDescription: lookingForaJobDescription,
            contacts: userContacts

        },
    })
    const onSubmit = (data: any) => {
        editMode(false)
        dispatch(updateProfileThunk(data))
    }

    return (

        <form className={s.profileInfoWrapper} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <b>FullName</b>: <input className={s.profileDataFormInputs} {...register("fullName")} />
            </div>
            <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
            <div>
                <b>About me</b>: <input className={s.profileDataFormInputs} {...register("aboutMe")} />
            </div>

            <div>
                <b>Looking for a job</b>: <input type={'checkbox'} {...register("lookingForAJob")} />
            </div>

            <div>
                <b>My professional skills</b>:
                <div>
                    <textarea style={{
                        width: '264px',
                        height: '100px',
                        resize: 'none',
                        outline: "none",
                        border: "none"
                    }} {...register('lookingForAJobDescription')} />
                </div>
            </div>


            <div>
                <b>Contacts</b>:{Object.entries(contacts).map(([key, value], index) =>
                <div>{key}:
                    <input key={index} className={s.profileDataFormInputs} {...register('contacts.' + key  as keyof FormInputs)}
                           type="text"/>
                </div>
            )}
            </div>
            <SuperButton type={'submit'}>save</SuperButton>
        </form>
    );
}