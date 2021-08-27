import {addPost, newPostText, PostDataType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStoreType} from "../../../redux/reduxStore";


type mapStateType = {
    profilePage: MyPostsType
}

type MyPostsType = {
    postData: Array<PostDataType>
    newPostText: string
}


type mapDispatchType = {
    addPost: (text: string) => void
    newPostText: (text: string) => void
}
export type MyPostsPropsType = mapStateType & mapDispatchType

const mapStateToProps = (state: AppStoreType): mapStateType => {
    return {
        profilePage: state.profilePage
    }
}


export const MyPostsContainer = connect(mapStateToProps, {addPost, newPostText})(MyPosts)


