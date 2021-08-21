import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../images/user.png"



export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response  => {  /* делаем get запрос на серва по url*/

            props.setUser(response.data.items)  /*Сетаем юзерсвов которые нам приходят на отрисовку */
        })

    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatar} src={u.photos.small == null ? userPhoto : u.photos.small }/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
                            <button onClick={() => props.follow(u.id)}> follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                       <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}