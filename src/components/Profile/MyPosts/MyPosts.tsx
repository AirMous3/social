import s from "./MyPosts.module.css"
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import { PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: (message: string) => void
    newPost: string
    newPostText: (text: string) => void
}


function MyPosts(props:MyPostsPropsType ) {

    let postsElements = props.postData.map( post => <Post message={post.post} likeCounts={post.likeCounts} avatar={post.avatar}/> )


    let addPost = () => {
        props.addPost(props.newPost)
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.newPostText(e.currentTarget.value)
    }

    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea  onChange={ onChangeHandler  } value={props.newPost} placeholder={"Что нового ?"}/>
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