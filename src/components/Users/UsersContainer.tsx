import React from 'react'
import { connect } from "react-redux";
import {
    changePageThunk,
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleInProgress,
    toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/UsersReducer";
import { AppStoreType } from "../../redux/reduxStore";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";


export type mapUsersStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isInProgress: boolean
    isFollowingProgress: string[]

}
type mapDispatchToPropsType = {
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    toggleInProgress: (inProgress: boolean) => void
    toggleIsFollowingProgress: (inProgress: boolean, userId: string) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    changePageThunk: (page:number, pageSize: number) => void
}


class UsersApiComponent extends React.Component<mapUsersStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.changePageThunk(page,this.props.pageSize)
    }

    render() {


        return (<>
            {this.props.isInProgress ? <Preloader /> : null} {/*Показываем прелоадер, если InProgress = true*/}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                follow={this.props.follow} pageSize={this.props.pageSize} unfollow={this.props.unfollow}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress} isFollowingProgress={this.props.isFollowingProgress} />

        </>
        )
    }
}

const mapUsersStateToProps = (state: AppStoreType): mapUsersStateToPropsType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isInProgress: state.usersPage.isInProgress,
        isFollowingProgress: state.usersPage.isFollowingProgress

    }
}


export const UsersContainer = connect(mapUsersStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleInProgress,
    toggleIsFollowingProgress,
    getUsersThunkCreator,
    changePageThunk,
})(UsersApiComponent)
