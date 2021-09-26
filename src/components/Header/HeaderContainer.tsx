import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { authThunk, logoutThunk } from '../../redux/authReducer';
import { AppStoreType } from "../../redux/reduxStore";
import Header from "./Header";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean

}
type MapDispatchToProps = {
    authThunk: () => void
    logoutThunk: ()=> void
}

type PropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.authThunk()
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
export default compose<React.ComponentType>(
    connect(mapStateToProps, { authThunk , logoutThunk })
)(HeaderContainer)