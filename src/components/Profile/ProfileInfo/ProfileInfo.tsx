import React from "react";
import { ProfileType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import userPhoto from "./../../../images/user.png";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoType) {
    if (!Object.keys(props.profile).length) {
        return <div>
            <Preloader />
        </div>
    }
    let contact = props.profile.contacts
    return <div className={s.container}>

        <img alt={'profileImage'} className={s.image} src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large} />
        <div className={s.text}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div>fullName: {props.profile.fullName} </div>
            <div>vk: {contact.vk} </div>
            <div>website: {contact.website}</div>
            <div>twitter: {contact.twitter}</div>
            <div>mainLink: {contact.mainLink}</div>
            <div>github: {contact.github}</div>
        </div>


    </div>

}


export default ProfileInfo