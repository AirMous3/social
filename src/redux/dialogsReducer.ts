import {ActionsType, DialogsDataType, DialogsPageType, MessageDataType} from "./store";

export const addNewMessageActionCreator = (messageText: string) => ({
    type: "ADD-NEW-MESSAGE",
    newMessage: messageText
}) as const
export const newMessageTextActionCreator = (newMessageText: string) => ({
    type: "NEW-MESSAGE-TEXT",
    newMessageText
}) as const

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
        case "ADD-NEW-MESSAGE":
            const newMessage: MessageDataType = {
                id: new Date().getTime(),
                message: action.newMessage
            }
            state.messagesData.push(newMessage)
            state.newDialogMessage = ""
            return state
        case "NEW-MESSAGE-TEXT":
            state.newDialogMessage = action.newMessageText
            return state
        default:
            return state
    }

}

export default dialogsReducer
