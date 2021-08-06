import {ActionsType} from "./ActionsTypes";


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
    id: number
}
export type MessageDataType = {
    message: string
    id: number
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
        {id: 1, message: "YO"},
        {id: 2, message: "Privet"},
        {id: 3, message: "Kak tvoi dela?"},
        {id: 4, message: "dab dab dab "},
        {id: 5, message: "hotline miami"},
    ],
    newDialogMessage: "",

    dialogsData: [

        {id: 1, name: "Ilya"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Dasha"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Lesha"},
    ],
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case "ADD-NEW-MESSAGE": {
            const newMessage: MessageDataType = {
                id: new Date().getTime(),
                message: action.newMessage
            }
            let copyState: initialStateType = {...state, messagesData: [...state.messagesData]}
            copyState.messagesData.push(newMessage)
            copyState.newDialogMessage = ""
            return copyState
        }
        case "NEW-MESSAGE-TEXT": {
            let copyState: initialStateType = {...state}
            copyState.newDialogMessage = action.newMessageText
            return copyState
        }
        default:
            return state
    }

}

export default dialogsReducer
