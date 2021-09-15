import {addNewMessageActionCreator, DialogsPageType, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


 type mapDialogsStateType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type mapDialogsDispatchType = {
    sendNewDialogMessage: (text: string) => void
    onNewMessageText: (text: string) => void
}

export type DialogsPropsType = mapDialogsStateType &  mapDialogsDispatchType

const mapStateToProps = (state: AppStoreType): mapDialogsStateType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth

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

