import {ChatMessage} from "./ChatMessage";
import {useEffect, useState} from "react";


interface messages {
    message: string
    photo: string
    userId: number
    userName: string
}

export const Messages = () => {

    const [messages, setMessages] = useState<messages[]>([])

    useEffect(() => {
        const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevState) => [...prevState, ...newMessages])
        })

        return () => {
            ws.close()
        }

    }, [])

    return <div style={{height: '550px', overflowY: 'auto'}}>
        {messages.map((
            {message, userId, userName, photo}, index
        ) =>
            <ChatMessage
                message={message}
                userName={userName}
                userId={userId}
                photo={photo}
                key={index}
            />)}
    </div>
}