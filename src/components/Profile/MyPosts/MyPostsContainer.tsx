
import React from "react";

import {
    addPostActionCreator,
    newPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {appStoreType} from "../../../redux/reduxStore";




type MyPostsPropsType = {
    store:  Store<appStoreType>
}


function MyPostsContainer(props: MyPostsPropsType) {



    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPost))
    }

    let onPostTextChangeHandler = (text: string) => {
        let action = newPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div>
            <MyPosts posts={state.profilePage.postData} newPost={state.profilePage.newPost} updateNewPostText={onPostTextChangeHandler} addPost={addPost}/>
        </div>
    )
}

export default MyPostsContainer