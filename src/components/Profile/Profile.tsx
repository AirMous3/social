import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState:ProfilePageType
    dispatch: (action: ActionsType ) => void

}

function Profile(props: ProfilePropsType) {
    console.log('props',props)

    return <div>
        <ProfileInfo/>
        <MyPosts dispatch={props.dispatch}  newPost={props.profilePageState.newPost} postData={props.profilePageState.postData} />

    </div>

}


export default Profile