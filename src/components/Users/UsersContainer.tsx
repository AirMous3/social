import React from 'react'
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/UsersReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


type mapUsersStateToPropsType = {
    users: Array<UserType>
}

const mapUsersStateToProps = (state: AppStoreType): mapUsersStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
type mapDispatchToPropsType = {
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
    setUser: (users: Array<UserType>) => void
}
export type UsersPropsType = mapUsersStateToPropsType & mapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapUsersStateToProps, mapDispatchToProps)(Users)