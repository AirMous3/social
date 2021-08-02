import React from "react";
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import {Store} from "redux";
import {appStoreType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {

    store: Store<appStoreType>


}


function DialogsContainer(props: DialogsContainerPropsType) {


    let state = props.store.getState()


    let sendNewDialogMessage = () => {
        props.store.dispatch(addNewMessageActionCreator(state.dialogsPage.newDialogMessage))
    }

    let onNewMessageText = (text: string) => {
        props.store.dispatch(newMessageTextActionCreator(text))
    }

    return (<div>
            <Dialogs dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData}
                     newMessageText={state.dialogsPage.newDialogMessage}
                     sendNewDialogMessage={sendNewDialogMessage} onMessageText={onNewMessageText}/>
        </div>
    )
}

export default DialogsContainer