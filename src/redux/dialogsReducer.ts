import {ActionsType, DialogsPageType, MessageDataType} from "./state";

export const addNewMessageActionCreator = (messageText: string) => ({
    type: "ADD-NEW-MESSAGE",
    newMessage: messageText
}) as const
export const newMessageTextActionCreator = (newMessageText: string) => ({
    type: "NEW-MESSAGE-TEXT",
    newMessageText
}) as const

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

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
