import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {UserType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (page: number) => void
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // Делим Количество юзеров на количество юзеров доступных на странице
    let pages = [] // Создали пустой массив
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    } // Пушим количество страниц в массив чтобы потом отрисоввать


    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : ""}
                                      onClick={() => props.onPageChanged(p)}>{p},</span>)} {/*Мапим Массив страниц */}
            </div>
            {props.users.map(u => <div key={u.id}> {/*Отрисовываем пришедших нам с сервера юзеров*/}
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}> {/* Навлинк на юзера при нажатии на картинку */}
                            <img className={s.avatar} src={u.photos.small == null ? userPhoto : u.photos.small}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "1dbc4cf7-1f30-4d66-936b-be5fca3239ce"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                                // диспатчим анфолов, только после ответа от сервера

                            }}>unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "1dbc4cf7-1f30-4d66-936b-be5fca3239ce"}

                                }).then(response => {

                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                }) // диспатчим фоллов только после ответа от сервера

                            }}> follow</button>}
                    </div>
                    {/*если u.follow = true, тогда рисуем кнопку с анфоллов иначе кнопку с фоллов*/}
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