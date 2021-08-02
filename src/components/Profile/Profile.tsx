import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Store} from "redux";
import {appStoreType} from "../../redux/reduxStore";

type ProfilePropsType = {
    store: Store<appStoreType>


}


function Profile(props: ProfilePropsType) {

debugger

    return <div>
        <ProfileInfo/>
        <MyPostsContainer  store={props.store} />

    </div>

}


export default Profile