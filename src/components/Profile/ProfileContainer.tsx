import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { AppStoreType } from "../../redux/reduxStore";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { goingToProfileThunk, ProfileType } from "../../redux/profileReducer";


type PathParamsType = {
    userId: string
}


type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    goingToProfileThunk: (userId: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = mapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.goingToProfileThunk(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login" />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { goingToProfileThunk })(WithUrlDataContainer)