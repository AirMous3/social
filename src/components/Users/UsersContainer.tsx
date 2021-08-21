import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/UsersReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import UsersC from "./UsersClass";


export type mapUsersStateToPropsType = {
    users: Array<UserType>
}
type mapDispatchToPropsType = {
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
    setUser: (users: Array<UserType>) => void
}

export type UsersPropsType = mapUsersStateToPropsType & mapDispatchToPropsType


const mapUsersStateToProps = (state: AppStoreType): mapUsersStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

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

export const UsersContainer = connect(mapUsersStateToProps, mapDispatchToProps)(UsersC)