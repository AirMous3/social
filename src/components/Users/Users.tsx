import {UserType} from "../../redux/UsersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (page: number) => void
    isFollowingProgress: string[],
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void

}

export const Users = ({
                          users,
                          currentPage,
                          onPageChanged,
                          pageSize,
                          unfollowUserThunk,
                          followUserThunk,
                          totalUsersCount,
                          isFollowingProgress
                      }: UsersPropsType) => {


    return (
        <div>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalUsersCount={totalUsersCount}/>
            {
                users.map((u) => <User key={u.id} user={u} isFollowingProgress={isFollowingProgress}
                                       unfollowUserThunk={unfollowUserThunk} followUserThunk={followUserThunk}/>)


            }

        </div>
    )
}