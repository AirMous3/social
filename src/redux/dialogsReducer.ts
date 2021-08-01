import {ActionsType, DialogsPageType, MessageDataType} from "./state";

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
