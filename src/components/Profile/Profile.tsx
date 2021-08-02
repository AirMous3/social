import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import {appStoreType} from "../../redux/reduxStore";

type ProfilePropsType = {
    store: appStoreType
    dispatch: Dispatch
}


function Profile(props: ProfilePropsType) {

    let state = props.store

    return <div>
        <ProfileInfo/>
        <MyPosts store={state} dispatch={props.dispatch} />

    </div>

}


export default Profile