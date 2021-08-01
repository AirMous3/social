import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import {ActionsType, PostDataType, ProfilePageType} from "./state";


const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostDataType = {
                id: new Date().getTime(),
                post: action.postText,
                likeCounts: 0,
                avatar: Avatar1
            }
            state.postData.push(newPost)
            state.newPost = ""
            return state
        case "NEW-POST-TEXT":
            state.newPost = action.newText
            return state
        default:
            return state
    }

}

export default profileReducer