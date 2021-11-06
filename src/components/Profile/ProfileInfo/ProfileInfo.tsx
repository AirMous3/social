import React, {ChangeEvent} from "react";
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

    const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            updatePhoto(e.target.files[0].name)
        }
    }

    return <div className={s.container}>

        <div className={s.wrapper}>
            <img alt={'profileImage'} className={s.image} src={profile.photos.large || userPhoto}/>
            <div className={s.text}>

                <div>

                    <div>
                        <b>FullName</b>: {profile.fullName}
                    </div>
                    <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
                    <div>
                        <b>About me</b>: {contact.vk}
                    </div>

                    <div>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>

                    {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills</b>: {profile.lookingForAJobDescription}
                    </div>}


                    <div>
                        <b>Contacts</b>
                    </div>
                    <div>
                        <b>Vk</b>: {contact.vk}
                    </div>
                    <div>
                        <b>Website</b>: {contact.website}
                    </div>
                    <div>
                        <b>Twitter</b>: {contact.twitter}
                    </div>
                    <div>
                        <b>MainLink</b>: {contact.mainLink}
                    </div>
                    <div>
                        <b>Github</b>: {contact.github}
                    </div>

                </div>
            </div>

        </div>
        {
            isOwner
            && <div style={{padding: '10px'}}>
                <input onChange={savePhotoHandler} id={'img'} style={{marginLeft: '50px', display: 'none'}}
                       type="file"/>
                <label htmlFor='img'> update photo</label>
            </div>
        }

    </div>

}


export default ProfileInfo