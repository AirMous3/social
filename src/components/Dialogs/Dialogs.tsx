import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Messages/Message";
import {DialogsPageType} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType

}


function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>)

    let newMessageElemenet = React.createRef<HTMLTextAreaElement>()
    let addNewMessage = () => {
        let newMessage = newMessageElemenet.current?.value
        alert(newMessage)
    }

    return (<div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElemenet}/>
                <button onClick={addNewMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs