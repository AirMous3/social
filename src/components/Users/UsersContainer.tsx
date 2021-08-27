import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleInProgress,
    unfollow,
    UserType
} from "../../redux/UsersReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";


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
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    toggleInProgress: (inProgress: boolean) => void
}


class UsersApiComponent extends React.Component<mapUsersStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {
        this.props.toggleInProgress(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {  /* делаем get запрос на сервак по url*/
            this.props.toggleInProgress(false)
            this.props.setUsers(response.data.items) /*Сетаем юзерсвов которые нам приходят на отрисовку */
            this.props.setTotalUsersCount(response.data.totalCount) // обновляем количество totalUsers

        })
    }

    onPageChanged = (page: number) => {
        this.props.toggleInProgress(true) // Меняем false на true перед запросом, чтобы показывался прелоадер
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleInProgress(false) // После запроса меняем на false, чтобы когда отрисуются Юзерсы, прелоадер спрятался
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return (<>
                {this.props.isInProgress ? <Preloader/> : null} {/*Показываем прелоадер, если InProgress = true*/}
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


export const UsersContainer = connect(mapUsersStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleInProgress})(UsersApiComponent)