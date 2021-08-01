import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import {ActionsType, PostDataType, ProfilePageType} from "./store";
import Avatar2 from "../components/Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../components/Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../components/Profile/MyPosts/AvatarImg/Avatar4.jpg";


export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText: postText}) as const
export const newPostTextActionCreator = (newText: string) => ({type: "NEW-POST-TEXT", newText: newText}) as const

let initialState = {
    postData: [
        {id: 1, post: "today i'l gonna be billionare", likeCounts: 12, avatar: Avatar1},
        {id: 2, post: "khmm, nice ", likeCounts: 24, avatar: Avatar2},
        {id: 3, post: "me too", likeCounts: 8, avatar: Avatar3},
        {id: 4, post: "balabol", likeCounts: 36, avatar: Avatar4},
    ],
    newPost: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

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