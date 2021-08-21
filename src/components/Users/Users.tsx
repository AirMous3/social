import React from "react";
import s from "./Users.module.css";
import userPhoto from "../images/user.png";
import axios from "axios";
import {UserType} from "../../redux/UsersReducer";


interface UsersCProps {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsers: number) => void

}


class Users extends React.Component<UsersCProps> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {  /* делаем get запрос на сервак по url*/

            this.props.setUser(response.data.items) /*Сетаем юзерсвов которые нам приходят на отрисовку */
            this.props.setTotalUsersCount(response.data.totalCount) // обновляем количество totalUsers
        })
    }

    onPageChanged(page: number) {

        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) // Делим Количество юзеров на количество юзеров доступных на странице
        let pages = [] // Создали пустой массив
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        } // Пушим количество страниц в массив чтобы потом отрисоввать
        return (

            <div>
                <div>
                    {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ""}
                                          onClick={() => this.onPageChanged(p)}>{p}</span>)} {/*Мапим Массив страниц */}
                </div>
                {this.props.users.map(u => <div key={u.id}> {/*Отрисовываем пришедших нам с сервера юзеров*/}
                    <span>
                    <div>
                        <img className={s.avatar} src={u.photos.small == null ? userPhoto : u.photos.small}/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button> :
                            <button onClick={() => this.props.follow(u.id)}> follow</button>}
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
}

export default Users