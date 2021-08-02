import s from "./MyPosts.module.css"
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profileReducer";
import {Dispatch} from "redux";
import {appStoreType} from "../../../redux/reduxStore";



type MyPostsPropsType = {
    store:  appStoreType
    dispatch: Dispatch
}


function MyPosts(props: MyPostsPropsType) {



    let postsElements = props.store.profilePage.postData.map(post => <Post message={post.post} likeCounts={post.likeCounts}
                                                         avatar={post.avatar}/>)


    let addPost = () => {
        props.dispatch(addPostActionCreator(props.store.profilePage.newPost))
    }

    let onPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostTextChangeHandler} value={props.store.profilePage.newPost} placeholder={"Что нового ?"}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts