
interface chatMessage {
    message: string
    photo: string
    userId: number
    userName: string
}
export const ChatMessage = ({message,userName,photo}:chatMessage) => {

    return <div>
        <img src={photo} alt="messageImage"/>
        <b>{userName}</b>
        <br/>
        {message}
        <hr/>
    </div>
}