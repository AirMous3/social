export {}

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, post: "today i'l gonna be billionare", likeCounts: 12, avatar: Avatar1},
//                 {id: 2, post: "khmm, nice ", likeCounts: 24, avatar: Avatar2},
//                 {id: 3, post: "me too", likeCounts: 8, avatar: Avatar3},
//                 {id: 4, post: "balabol", likeCounts: 36, avatar: Avatar4},
//             ],
//             newPost: "",
//
//
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: 1, message: "YO"},
//                 {id: 2, message: "Privet"},
//                 {id: 3, message: "Kak tvoi dela?"},
//                 {id: 4, message: "dab dab dab "},
//                 {id: 5, message: "hotline miami"},
//             ],
//             newDialogMessage: "",
//
//             dialogsData: [
//
//                 {id: 1, name: "Ilya"},
//                 {id: 2, name: "Sasha"},
//                 {id: 3, name: "Dasha"},
//                 {id: 4, name: "Masha"},
//                 {id: 5, name: "Lesha"},
//             ],
//         },
//
//
//     },
//     _renderTree() {
//         console.log("state changed")
//     },
//     subscribe(callback) {
//         this._renderTree = callback
//     },
//
//     getState() {
//         return this._state
//     },
//     dispatch(action) { // { type: "ADD-POST"}
//
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
//         this._state.profilePage = profileReducer(this._state.profilePage,action)
//         this._renderTree()
//
//     }
//
// }


//export default store