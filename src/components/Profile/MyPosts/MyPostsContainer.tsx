import {
    addPostActionCreator, newPostTextActionCreator, ProfilePageType,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStoreType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type mapStateType = {
    profilePage: ProfilePageType
}
type mapDispatchType = {
    addPost: (text: string) => void
    onPostTextChangeHandler: (text: string) => void
}
export type MyPostsPropsType = mapStateType & mapDispatchType

const mapStateToProps = (state: AppStoreType): mapStateType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
        onPostTextChangeHandler: (text: string) => {
            let action = newPostTextActionCreator(text)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


