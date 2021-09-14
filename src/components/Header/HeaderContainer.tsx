import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { AppStoreType } from "../../redux/reduxStore";
import { authThunk } from '../../redux/authReducer';

type MapStateToPropsType = {
    login: string
    isAuth: boolean

}
type MapDispatchToProps = {
    authThunk: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainerC extends React.Component<PropsType> {

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

export const HeaderContainer = connect(mapStateToProps, { authThunk })(HeaderContainerC)