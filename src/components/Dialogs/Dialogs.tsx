import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import {
    DialogsDataType,
    MessageDataType,
} from "../../redux/dialogsReducer";


type DialogsPropsType = {


    onMessageText: (text: string) => void
    sendNewDialogMessage: () => void
    dialogsData: Array<DialogsDataType>
    newMessageText: string
    messagesData: Array<MessageDataType>


}


function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.dialogsData.map((d) => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messagesData.map((message) => <Message message={message.message}/>)
    let newMessageText = props.newMessageText

    let sendNewDialogMessage = () => {
        props.sendNewDialogMessage()
    }

    let onMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageText(e.currentTarget.value)
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