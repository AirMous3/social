import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { goingToProfileThunk, ProfileType } from "../../redux/profileReducer";
import { AppStoreType } from "../../redux/reduxStore";
import Profile from "./Profile";


type PathParamsType = {
    userId: string
}


type mapStateToPropsType = {
    profile: ProfileType

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

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
})


let WithUrlDataContainer = withRouter(ProfileContainer)

export default AuthRedirect(connect(mapStateToProps, { goingToProfileThunk })(WithUrlDataContainer))

