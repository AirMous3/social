import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { AppStoreType } from "../../redux/reduxStore";
import {
    changePageThunk,
    followUserThunk,
    getUsersThunk, unfollowUserThunk,
    UserType
} from "../../redux/UsersReducer";
import { Preloader } from "../common/Preloader/Preloader";
import { Users } from "./Users";


export type mapUsersStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isInProgress: boolean
    isFollowingProgress: string[]
    isAuth: boolean

}
type mapDispatchToPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    changePageThunk: (page: number, pageSize: number) => void
    unfollowUserThunk: (userId: string) => void
    followUserThunk: (userId: string) => void
}


class UsersApiComponent extends React.Component<mapUsersStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.changePageThunk(page, this.props.pageSize)
    }

    render() {

        if (!this.props.isAuth ) return <Redirect to="/login" />
        return (<>
            {this.props.isInProgress ? <Preloader /> : null} {/*Показываем прелоадер, если InProgress = true*/}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                pageSize={this.props.pageSize} followUserThunk={this.props.followUserThunk} unfollowUserThunk={this.props.unfollowUserThunk}
                isFollowingProgress={this.props.isFollowingProgress} />

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
        isFollowingProgress: state.usersPage.isFollowingProgress,
        isAuth: state.auth.isAuth,

    }
}


export const UsersContainer = connect(mapUsersStateToProps, {
    getUsersThunk,
    changePageThunk,
    followUserThunk,
    unfollowUserThunk,
})(UsersApiComponent)
