import React from "react";
import { AddPostForm } from "./AddPostForm";
import s from "./MyPosts.module.css";
import { MyPostsPropsType } from "./MyPostsContainer";
import Post from "./Post/Post";





function MyPosts(props: MyPostsPropsType) {

    let state = props.profilePage

    let postsElements = state.postData.map(post => <Post key={post.id} message={post.post}
        likeCounts={post.likeCounts} avatar={post.avatar} />)


    return (
        <div className={s.container}>
            <h3> My Posts </h3>
            <div>
                <AddPostForm addPost={props.addPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts