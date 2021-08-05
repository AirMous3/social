import {addNewMessageActionCreator, DialogsPageType, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


export type mapDialogsStateType = {
    dialogsPage: DialogsPageType
}

type mapDialogsDispatchType = {
    sendNewDialogMessage: (text: string) => void
    onNewMessageText: (text: string) => void
}

const mapStateToProps = (state: AppStoreType): mapDialogsStateType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
const mapDispatchToProps = ( dispatch: Dispatch): mapDialogsDispatchType => {
    return {
        sendNewDialogMessage: (text: string) => {
            dispatch(addNewMessageActionCreator(text))
        },
        onNewMessageText: (text: string) => {
            let action = newMessageTextActionCreator(text)
            dispatch(action)
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs)

