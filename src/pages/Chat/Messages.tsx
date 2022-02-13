import {ChatMessage} from "./ChatMessage";


interface message {
    message: string
    photo: string
    userId: number
    userName: string
}

interface messages {
    messages: message[]
}
export const Messages = ({messages}: messages) => {


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