import {Messages} from "./Messages";
import {AddMessage} from "./AddMessage";
import {useEffect, useState} from "react";

interface messages {
    message: string
    photo: string
    userId: number
    userName: string
}


export const ChatPage = () => {

    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState<messages[]>([])
    const [ws] = useState(() => new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))

    useEffect(() => {

        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevState) => [...prevState, ...newMessages])
        })
        return () => {
            ws.close()
        }

    }, [])

    const sendNewMessage = () => {
        if (!newMessage) return
        ws.send(newMessage)
        setNewMessage('')
    }

    return <div>
        <Messages messages={messages}/>
        <AddMessage message={newMessage} onChangeMessage={setNewMessage} onSendMessage={sendNewMessage}/>
    </div>
}

