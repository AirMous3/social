import s from "./MyPosts.module.css"
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {ActionsType, addPostActionCreator, newPostTextActionCreator, PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    dispatch: (action: ActionsType) => void
    postData: Array<PostDataType>
    newPost: string
}


function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.postData.map(post => <Post message={post.post} likeCounts={post.likeCounts}
                                                         avatar={post.avatar}/>)


    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPost))
    }

    let onPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newPostTextActionCreator(e.currentTarget.value))
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