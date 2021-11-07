import React, { useState } from "react";
import s from "./Post.module.css";
import SuperButton from "../../../common/SuperButton/SuperButton";



type PropsPostType = {
    message: string
    avatar: string
    likeCounts: number

}


function Post(props: PropsPostType) {

    let [count, setCount] = useState(props.likeCounts)

    return (

        <div className={s.item}>
            <img alt={'postImage'} src={props.avatar} />

            <div className={s.text} >{props.message}</div>

            <div>
                <SuperButton  onClick={() => setCount(count + 1)}> {count} like </SuperButton>
            </div>
        </div>


    )
}

export default Post