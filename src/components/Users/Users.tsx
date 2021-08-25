import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {UserType} from "../../redux/UsersReducer";


type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (page: number) => void
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
}

export const Users = (props: UsersPropsType ) => {

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
                        <img className={s.avatar} src={u.photos.small == null ? userPhoto : u.photos.small}/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
                            <button onClick={() => props.follow(u.id)}> follow</button>}
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