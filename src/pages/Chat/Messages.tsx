import {ChatMessage} from "./ChatMessage";

export const Messages = () => {
    const messages: any = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return <div style={{height: '550px', overflowY: 'auto'}}>
        {messages.map((m: any) => <ChatMessage/>)}
    </div>
}