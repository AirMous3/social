interface addMessage {
    message: string
    onChangeMessage: (message: string) => void
    onSendMessage: () => void
}

export const AddMessage = ({onChangeMessage, message, onSendMessage}: addMessage) => {


    return <div>
        <div>
            <textarea onChange={(e) => onChangeMessage(e.currentTarget.value)}
                      value={message}
                      style={{width: '300px', height: '140px'}}/>
        </div>
        <div>
            <button onClick={onSendMessage}>Send</button>
        </div>
    </div>
}