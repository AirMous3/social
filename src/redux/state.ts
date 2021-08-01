import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import Avatar2 from "../components/Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../components/Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../components/Profile/MyPosts/AvatarImg/Avatar4.jpg";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


export type DialogsDataType = {
    name: string
    id: number
}
export type MessageDataType = {
    message: string
    id: number
}
export type PostDataType = {
    id: number
    post: string
    likeCounts: number
    avatar: string

}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPost: string

}
export type DialogsPageType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
    newDialogMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type StoreType = {
    _state: RootStateType
    onChange: (callback: () => void) => void
    _renderTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}


export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof newPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof newMessageTextActionCreator>

export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText: postText}) as const
export const newPostTextActionCreator = (newText: string) => ({type: "NEW-POST-TEXT", newText: newText}) as const
export const addNewMessageActionCreator = (messageText: string) => ({
    type: "ADD-NEW-MESSAGE",
    newMessage: messageText
}) as const
export const newMessageTextActionCreator = (newMessageText: string) => ({
    type: "NEW-MESSAGE-TEXT",
    newMessageText
}) as const

const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: "today i'l gonna be billionare", likeCounts: 12, avatar: Avatar1},
                {id: 2, post: "khmm, nice ", likeCounts: 24, avatar: Avatar2},
                {id: 3, post: "me too", likeCounts: 8, avatar: Avatar3},
                {id: 4, post: "balabol", likeCounts: 36, avatar: Avatar4},
            ],
            newPost: "",


        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: "YO"},
                {id: 2, message: "Privet"},
                {id: 3, message: "Kak tvoi dela?"},
                {id: 4, message: "dab dab dab "},
                {id: 5, message: "hotline miami"},
            ],
            newDialogMessage: "",

            dialogsData: [

                {id: 1, name: "Ilya"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Dasha"},
                {id: 4, name: "Masha"},
                {id: 5, name: "Lesha"},
            ],
        },


    },
    _renderTree() {
        console.log("state changed")
    },
    onChange(callback) {
        this._renderTree = callback
    },

    getState() {
        return this._state
    },
    dispatch(action) { // { type: "ADD-POST"}

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._renderTree()

    }

}


export default store