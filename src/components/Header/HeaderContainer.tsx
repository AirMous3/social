import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";
import {setAuthUserData} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    login: string
    isAuth: boolean

}
type MapDispatchToProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainerC extends React.Component<PropsType> {

    componentDidMount() {

        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }

            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerC)