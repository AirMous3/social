import {addPostActionCreator, newPostTextActionCreator} from "./profileReducer";
import {addNewMessageActionCreator, newMessageTextActionCreator} from "./dialogsReducer";

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof newPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof newMessageTextActionCreator>
