import s from "./MyPosts.module.css"
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";




function MyPosts(props: MyPostsPropsType) {

    let state = props.profilePage
    let newPostText = state.newPost

    let postsElements = state.postData.map(post => <Post key={post.id} message={post.post} likeCounts={post.likeCounts}
                                                                     avatar={post.avatar}/>)


    let addPost = () => {
        props.addPost(newPostText)
    }

    let onPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostTextChangeHandler(e.currentTarget.value)
    }

    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostTextChangeHandler} value={state.newPost}
                              placeholder={"Что нового ?"}/>
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