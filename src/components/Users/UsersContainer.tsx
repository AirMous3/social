import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/UsersReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {Users} from "./Users";
import axios from "axios";
import Spinner from "../../images/tail-spin.svg"


export type mapUsersStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isInProgress: boolean
}
type mapDispatchToPropsType = {
    follow: (UserID: string) => void
    unfollow: (UserID: string) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsers: number) => void
}


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
    isInProgress: boolean

}


class UsersApiComponent extends React.Component<UsersCProps> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {  /* делаем get запрос на сервак по url*/

            this.props.setUser(response.data.items) /*Сетаем юзерсвов которые нам приходят на отрисовку */
            this.props.setTotalUsersCount(response.data.totalCount) // обновляем количество totalUsers
        })
    }

    onPageChanged = (page: number) => {

        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {


        return (<>
                {this.props.isInProgress ? <img src={Spinner}/> : null}
                <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                       onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                       follow={this.props.follow} pageSize={this.props.pageSize} unfollow={this.props.unfollow}/>

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
        isInProgress: state.usersPage.isInProgress

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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        }
    }
}

export const UsersContainer = connect(mapUsersStateToProps, mapDispatchToProps)(UsersApiComponent)