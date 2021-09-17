import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatusThunk: (status: string) => void
}

function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateUserStatusThunk} />
        <MyPostsContainer />

    </div>

}


export default Profile