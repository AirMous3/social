import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import {ActionsType, StoreType} from "../../redux/state";
import {addNewMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogsReducer";


type DialogsPropsType = {

    store: StoreType
    dispatch: (action: ActionsType) => void

}


function Dialogs(props: DialogsPropsType) {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>)
    let newMessageText = state.newDialogMessage

    let sendNewDialogMessage = () => {
        props.dispatch(addNewMessageActionCreator(state.newDialogMessage))
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