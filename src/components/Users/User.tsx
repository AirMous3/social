import {NavLink} from "react-router-dom";
import userPhoto from "../../images/user.png";
import {UserType} from "../../redux/UsersReducer";
import s from "./Users.module.css";


type UsersPropsType = {
    user: UserType
    isFollowingProgress: string[],
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void

}

export const User = ({
                         user,
                         unfollowUserThunk,
                         followUserThunk,
                         isFollowingProgress
                     }: UsersPropsType) => {


    return (
        <div>
            <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}> {/* Навлинк на юзера при нажатии на картинку */}
                            <img alt={'userPhoto'} className={s.avatar}
                                 src={user.photos.small == null ? userPhoto : user.photos.small}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {
                                unfollowUserThunk(user.id)
                            }}>unfollow</button> : //дизейблим отдельную кнопку методом some
                            <button disabled={isFollowingProgress.some(id => id === user.id)} onClick={() => {
                                followUserThunk(user.id)
                            }}> follow</button>}
                    </div>
                {/*если user.follow = true, тогда рисуем кнопку с анфоллов иначе кнопку с фоллов*/}
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>

        </div>
    )
}