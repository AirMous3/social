import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import {addNewMessageActionCreator, DialogsPageType, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";




type DialogsPropsType = {

    store: DialogsPageType
    dispatch: Dispatch

}



function Dialogs(props: DialogsPropsType) {


    // let state = props.store

    //let _state = props.store.getState().dialogsPage

    let dialogsElements = props.store.dialogsData.map((d:any) => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.store.messagesData.map((message: any) => <Message message={message.message}/>)
    let newMessageText = props.store.newDialogMessage

    let sendNewDialogMessage = () => {
       props.dispatch(addNewMessageActionCreator(props.store.newDialogMessage))
    }

    let onMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageTextActionCreator(e.currentTarget.value))
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