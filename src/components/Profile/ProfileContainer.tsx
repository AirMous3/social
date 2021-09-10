import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


type PathParamsType = {
    userId: string
}


type mapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
type ProfileContainerType = mapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        usersAPI.userProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainer = withRouter(ProfileContainer)

export default  connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer)