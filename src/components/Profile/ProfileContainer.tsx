import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { getUserProfileThunk, getUsersStatusThunk, ProfileType } from "../../redux/profileReducer";
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
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = mapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUsersStatusThunk(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(AuthRedirect,
    connect(mapStateToProps, { getUserProfileThunk, getUsersStatusThunk }),
    withRouter
)(ProfileContainer)