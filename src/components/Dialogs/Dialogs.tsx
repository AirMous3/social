import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import {ActionsType, DialogsPageType, addNewMessageActionCreator, newMessageTextActionCreator} from "../../redux/state";


type DialogsPropsType = {

    state: DialogsPageType
    dispatch: (action: ActionsType) => void

}


function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>)


    let addNewDialogMessage = () => {
        props.dispatch(addNewMessageActionCreator(props.state.newDialogMessage))
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
                {messagesElements}
                <textarea onChange={onMessageTextHandler} value={props.state.newDialogMessage}
                          placeholder={"Напиши своё сообщение"}/>
                <button onClick={addNewDialogMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs