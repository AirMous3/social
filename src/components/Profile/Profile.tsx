import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state:ProfilePageType
    addPost: (message: string) => void
}

function Profile(props: ProfilePropsType) {


    return <div>
        <ProfileInfo/>
        <MyPosts addPost={props.addPost} postData={props.state.postData}/>

    </div>

}


export default Profile