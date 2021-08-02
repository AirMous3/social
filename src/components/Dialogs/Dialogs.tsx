import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import {addNewMessageActionCreator,  newMessageTextActionCreator} from "../../redux/dialogsReducer";
import { Store} from "redux";
import {appStoreType} from "../../redux/reduxStore";




type DialogsPropsType = {

    store: Store<appStoreType>


}



function Dialogs(props: DialogsPropsType) {


     let state = props.store.getState()

    //let _state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsPage.dialogsData.map((d) => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.dialogsPage.messagesData.map((message) => <Message message={message.message}/>)
    let newMessageText = state.dialogsPage.newDialogMessage

    let sendNewDialogMessage = () => {
       props.store.dispatch(addNewMessageActionCreator(state.dialogsPage.newDialogMessage))
    }

    let onMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(newMessageTextActionCreator(e.currentTarget.value))
    }

    return (<div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>

                <div>
                    <div>
                        <textarea onChange={onMessageTextHandler}
                                  value={newMessageText}
                                  placeholder={"Напиши своё сообщение"}/>
                    </div>
                    <div>
                        <button onClick={sendNewDialogMessage}>Send</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Dialogs