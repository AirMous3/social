import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, StoreType} from "../../redux/state";

type ProfilePropsType = {
    store: StoreType
    dispatch: (action: ActionsType ) => void

}

function Profile(props: ProfilePropsType) {
    let state = props.store.getState().profilePage

    return <div>
        <ProfileInfo/>
        <MyPosts dispatch={props.dispatch}  newPost={state.newPost} postData={state.postData} />

    </div>

}


export default Profile