import s from "./MyPosts.module.css"
import React from "react";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: (message: string) => void
}


function MyPosts(props:MyPostsPropsType ) {

    let postsElements = props.postData.map( post => <Post message={post.post} likeCounts={post.likeCounts} avatar={post.avatar}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div>
            <h3> My Posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder={"Что нового ?"}></textarea>
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