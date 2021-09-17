import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { getUserProfileThunk, getUsersStatusThunk, ProfileType, updateUserStatusThunk } from "../../redux/profileReducer";
import { AppStoreType } from "../../redux/reduxStore";
import Profile from "./Profile";


type PathParamsType = {
    userId: string
}


type mapStateToPropsType = {
    profile: ProfileType
    status: string

}

type MapDispatchPropsType = {
    getUserProfileThunk: (userId: string) => void
    getUsersStatusThunk: (userId: string) => void
    updateUserStatusThunk: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = mapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "18949"
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUsersStatusThunk(userId)
    }

    render() {

        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(AuthRedirect,
    connect(mapStateToProps, { getUserProfileThunk, getUsersStatusThunk, updateUserStatusThunk }),
    withRouter
)(ProfileContainer)