import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import Avatar2 from "../components/Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../components/Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../components/Profile/MyPosts/AvatarImg/Avatar4.jpg";
import {ActionsType} from "./ActionsTypes";
import {v1} from "uuid";


export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText: postText}) as const
export const newPostTextActionCreator = (newText: string) => ({type: "NEW-POST-TEXT", newText: newText}) as const

export type PostDataType = {
    id: string
    post: string
    likeCounts: number
    avatar: string

}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPost: string

}

type initialStateType = {
    postData: Array<PostDataType>
    newPost: string
}

let initialState: initialStateType = {
    postData: [
        {id: v1(), post: "today i'l gonna be billionare", likeCounts: 12, avatar: Avatar1},
        {id: v1(), post: "lmao, nice ", likeCounts: 24, avatar: Avatar2},
        {id: v1(), post: "me too", likeCounts: 8, avatar: Avatar3},
        {id: v1(), post: "zzzzz", likeCounts: 36, avatar: Avatar4},
    ],
    newPost: "",
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): initialStateType => {

    let copyState: initialStateType = {...state, postData: [...state.postData]}

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostDataType = {
                id: v1(),
                post: action.postText,
                likeCounts: 0,
                avatar: Avatar1
            }

            copyState.postData.push(newPost)
            copyState.newPost = ""
            return copyState

        case "NEW-POST-TEXT":
            copyState.newPost = action.newText
            return copyState

        default:
            return state
    }

}

export default profileReducer