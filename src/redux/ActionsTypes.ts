import {addPostActionCreator, newPostTextActionCreator} from "./profileReducer";
import {addNewMessageActionCreator, newMessageTextActionCreator} from "./dialogsReducer";
import {followAC, setUsersAC, unfollowAC} from "./UsersReducer";

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof newPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof newMessageTextActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
