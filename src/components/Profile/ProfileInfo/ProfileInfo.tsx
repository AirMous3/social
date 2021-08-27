import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoType) {
    if (!Object.keys(props.profile).length) {
        return <div>
            <Preloader/>
        </div>
    }
    let contact = props.profile.contacts
    return <div className={s.container}>

        <img className={s.image} src={props.profile.photos.large}/>
        <div className={s.text}>
            <div>status: {props.profile.aboutMe} </div>
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