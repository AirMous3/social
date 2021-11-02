import React from "react";
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "./../../../images/user.png";
import s from "./ProfileInfo.module.css";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photo: string) => void

}

function ProfileInfo({profile, status, updateStatus, isOwner, updatePhoto}: ProfileInfoType) {
    if (!Object.keys(profile).length) {
        return <div>
            <Preloader/>
        </div>
    }
    let contact = profile.contacts

    const savePhotoHandler = (e: any) => {
        if (e.target.files) {
            updatePhoto(e.target.files[0])
        }
    }

    return <div className={s.container}>

        <div className={s.wrapper}>
            <img alt={'profileImage'} className={s.image} src={profile.photos.large || userPhoto}/>
            <div className={s.text}>
                <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
                <div>fullName: {profile.fullName} </div>
                <div>vk: {contact.vk} </div>
                <div>website: {contact.website}</div>
                <div>twitter: {contact.twitter}</div>
                <div>mainLink: {contact.mainLink}</div>
                <div>github: {contact.github}</div>
            </div>

        </div>
        {
            isOwner
            && <div style={{padding: '10px'}}>
                <input onChange={savePhotoHandler} id={'img'} style={{marginLeft: '50px', display: 'none'}} type="file"/>
                <label  htmlFor='img'> update photo</label>
            </div>
        }

    </div>

}


export default ProfileInfo