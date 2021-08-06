import {ActionsType} from "./ActionsTypes";
import {v1} from "uuid";


export const addNewMessageActionCreator = (messageText: string) => ({
    type: "ADD-NEW-MESSAGE",
    newMessage: messageText
}) as const
export const newMessageTextActionCreator = (newMessageText: string) => ({
    type: "NEW-MESSAGE-TEXT",
    newMessageText
}) as const


export type DialogsDataType = {
    name: string
    id: string
}
export type MessageDataType = {
    message: string
    id: string
}
export type DialogsPageType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
    newDialogMessage: string
}

type initialStateType = {
    messagesData: Array<MessageDataType>
    newDialogMessage: string
    dialogsData: Array<DialogsDataType>
}

let initialState: initialStateType = {

    messagesData: [
        {id: v1(), message: "YO"},
        {id: v1(), message: "Privet"},
        {id: v1(), message: "Kak tvoi dela?"},
        {id: v1(), message: "dab dab dab "},
        {id: v1(), message: "hotline miami"},
    ],
    newDialogMessage: "",

    dialogsData: [

        {id: v1(), name: "Ilya"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Dasha"},
        {id: v1(), name: "Masha"},
        {id: v1(), name: "Lesha"},
    ],
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): initialStateType => {

    let copyState: initialStateType = {...state, messagesData: [...state.messagesData] }

    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMessage: MessageDataType = {
                id: v1(),
                message: action.newMessage
            }
            copyState.messagesData.push(newMessage)
            copyState.newDialogMessage = ""
            return copyState

        case "NEW-MESSAGE-TEXT":

            copyState.newDialogMessage = action.newMessageText
            return copyState

        default:
            return state
    }

}

export default dialogsReducer
