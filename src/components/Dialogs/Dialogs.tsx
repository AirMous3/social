import React, { ChangeEvent } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import { DialogsPropsType } from "./DialogsContainer";
import { Redirect } from "react-router-dom";





function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />)
    let messagesElements = state.messagesData.map((message) => <Message key={message.id} message={message.message} />)
    let newMessageText = state.newDialogMessage

    let sendNewDialogMessage = () => {
        props.sendNewDialogMessage(newMessageText)
    }

    let onMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageText(e.currentTarget.value)
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
                        placeholder={"Напиши своё сообщение"} />
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