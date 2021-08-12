import React from 'react'
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import {v1} from "uuid";
import Avatar1 from "../Profile/MyPosts/AvatarImg/Avatar1.jpg";
import Avatar2 from "../Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../Profile/MyPosts/AvatarImg/Avatar4.jpg";

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUser([{
            id: v1(),
            avatar: Avatar1,
            follow: false,
            fullName: "Ilya",
            status: "React-Readux Developer",
            location: {city: "Minsk", country: "Belarus"}
        },
            {
                id: v1(),
                avatar: Avatar2,
                follow: true,
                fullName: "Sasha",
                status: "Student of IT-INCUBATOR",
                location: {city: "Baranovichi", country: "Belarus"}
            }, {
                id: v1(),
                avatar: Avatar3,
                follow: false,
                fullName: "Dasha",
                status: "Did u see something cool?",
                location: {city: "Budapest", country: "Hungary"}
            }, {
                id: v1(),
                avatar: Avatar4,
                follow: true,
                fullName: "Masha",
                status: "Lov3 U",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: v1(),
                avatar: Avatar4,
                follow: false,
                fullName: "Lesha",
                status: "",
                location: {city: "Kiev", country: "Ukraine"}
            }, {
                id: v1(),
                avatar: Avatar4,
                follow: true,
                fullName: "Pasha",
                status: "OtJIu4HUK",
                location: {city: "Gomel", country: "Belarus"}
            },])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatar} src={u.avatar}/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
                            <button onClick={() => props.follow(u.id)}> follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                       <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}