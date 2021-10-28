import {NavLink} from "react-router-dom";
import userPhoto from "../../images/user.png";
import {UserType} from "../../redux/UsersReducer";
import s from "./Users.module.css";


type UsersPropsType = {
    users: Array<UserType>
    isFollowingProgress: string[],
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void

}

export const User = ({
                          users,
                          unfollowUserThunk,
                          followUserThunk,
                          isFollowingProgress
                      }: UsersPropsType) => {


    return (
        <div>
            {users.map(u => <div key={u.id}> {/*Отрисовываем пришедших нам с сервера юзеров*/}
                    <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}> {/* Навлинк на юзера при нажатии на картинку */}
                            <img alt={'userPhoto'} className={s.avatar}
                                 src={u.photos.small == null ? userPhoto : u.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                unfollowUserThunk(u.id)
                            }}>unfollow</button> : //дизейблим отдельную кнопку методом some
                            <button disabled={isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                followUserThunk(u.id)
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
                </div>
            )}
        </div>
    )
}