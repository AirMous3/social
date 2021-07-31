import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import Avatar2 from "../components/Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../components/Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../components/Profile/MyPosts/AvatarImg/Avatar4.jpg";




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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}




let renderTree = (props: RootStateType) => {

}

export const onChange = (callback: (props: RootStateType) => void) => {
    renderTree = callback
}


let state: RootStateType = {
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
        dialogsData: [

            {id: 1, name: "Ilya"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Dasha"},
            {id: 4, name: "Masha"},
            {id: 5, name: "Lesha"},
        ],
    }

}


export const addPost = (  ) => {
    const newPost: PostDataType  = {id: new Date().getTime(), post: state.profilePage.newPost, likeCounts: 0, avatar: Avatar1}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPost = ""
    renderTree(state)
}

export const newPostText = (newText: string) => {
    state.profilePage.newPost = newText
    renderTree(state)
}



export default state