import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoType) {
    if(!Object.keys(props.profile).length){
        return <div>
            <Preloader/>
        </div>
    }
    return <div className={s.container}>

        <img className={s.image} src={props.profile.photos.small}/>
        <div className={s.text}>
            <div>about me: </div>
            <div>country: </div>
            <div>what i love: </div>
        </div>


    </div>

}


export default ProfileInfo