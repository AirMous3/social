import Profile from "./Profile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStoreType} from "../../redux/reduxStore";


interface ProfileContainerType {

    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

type mapStateToPropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            debugger
            this.props.setUserProfile(response.data)
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

export default  connect(mapStateToProps, {setUserProfile})(ProfileContainer)