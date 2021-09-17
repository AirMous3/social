import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import Avatar2 from "../components/Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../components/Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../components/Profile/MyPosts/AvatarImg/Avatar4.jpg";
import { v1 } from "uuid";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";

type ActionsProfileReducerType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof newPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


export type PostDataType = {
    id: string
    post: string
    likeCounts: number
    avatar: string

}

type initialStateType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: ProfileType
    status: string
}

let initialState: initialStateType = {
    postData: [
        { id: v1(), post: "today i'l gonna be billionare", likeCounts: 12, avatar: Avatar1 },
        { id: v1(), post: "lmao, nice ", likeCounts: 24, avatar: Avatar2 },
        { id: v1(), post: "me too", likeCounts: 8, avatar: Avatar3 },
        { id: v1(), post: "zzzzz", likeCounts: 36, avatar: Avatar4 },
    ],
    newPostText: "",
    profile: {} as ProfileType,
    status: ""
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export const profileReducer = (state: initialStateType = initialState, action: ActionsProfileReducerType): initialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostDataType = { id: v1(), post: action.postText, likeCounts: 0, avatar: Avatar1 }
            return { ...state, postData: [...state.postData, newPost], newPostText: "" }
        case "NEW-POST-TEXT":
            return { ...state, newPostText: action.newText }
        case "SET-USER-PROFILE":
            return { ...state, profile: action.profile }
        case "SET-STATUS":
            return { ...state, status: action.status }
        default:
            return state

    }

}

export const addPost = (postText: string) => ({ type: "ADD-POST", postText: postText }) as const
export const newPostText = (newText: string) => ({ type: "NEW-POST-TEXT", newText: newText }) as const
export const setUserProfile = (profile: ProfileType) => ({ type: "SET-USER-PROFILE", profile }) as const
export const setStatus = (status: string) => ({ type: "SET-STATUS", status }) as const


export const getUserProfileThunk = (userId: string) => {
    return (dispatch: Dispatch<ActionsProfileReducerType>) => {
        usersAPI.userProfile(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}
export const getUsersStatusThunk = (userId: string) => {
    return (dispatch: Dispatch<ActionsProfileReducerType>) => {
        profileAPI.getStatus(userId).then(res =>
            dispatch(setStatus(res.data)))
    }
}
export const updateUserStatusThunk = (status: string) => {
    return (dispatch: Dispatch<ActionsProfileReducerType>) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        }
        )
    }
}