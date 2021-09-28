import React, { useState } from "react";
import s from "./Post.module.css";



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
                <button className={s.button} onClick={() => setCount(count + 1)}> {count} like </button>
            </div>
        </div>


    )
}

export default Post