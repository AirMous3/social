import s from "./MyPosts.module.css"
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/profileReducer";



type MyPostsPropsType = {
    posts: Array<PostDataType>
    updateNewPostText: (text: string) => void
    addPost: () => void
    newPost: string
}


function MyPosts(props: MyPostsPropsType) {


    let postsElements = props.posts.map(post => <Post message={post.post} likeCounts={post.likeCounts}
                                                         avatar={post.avatar}/>)


    let addPost = () => {
        props.addPost()
    }

    let onPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostTextChangeHandler} value={props.newPost} placeholder={"Что нового ?"}/>
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