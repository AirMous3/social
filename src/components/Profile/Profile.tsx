import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState:ProfilePageType
    addPost: (message: string) => void
    newPostText: (text: string) => void
}

function Profile(props: ProfilePropsType) {
    console.log('props',props)

    return <div>
        <ProfileInfo/>
        <MyPosts addPost={props.addPost}  newPost={props.profilePageState.newPost} postData={props.profilePageState.postData} newPostText={props.newPostText}/>

    </div>

}


export default Profile