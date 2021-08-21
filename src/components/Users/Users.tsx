import React from "react";
import s from "./Users.module.css";
import userPhoto from "../images/user.png";
import axios from "axios";
import {UserType} from "../../redux/UsersReducer";


interface UsersCProps {
    users: Array<UserType>
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
    setUser: (users: Array<UserType>) => void

}


class Users extends React.Component<UsersCProps> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {  /* делаем get запрос на серва по url*/

            this.props.setUser(response.data.items)  /*Сетаем юзерсвов которые нам приходят на отрисовку */
        })
    }

    render() {
        return (

            <div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatar} src={u.photos.small == null ? userPhoto : u.photos.small}/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button> :
                            <button onClick={() => this.props.follow(u.id)}> follow</button>}
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
}

export default Users