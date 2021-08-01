import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";





let reducers = combineReducers(
    {
       dialogsPage: dialogsReducer,
       profilePage: profileReducer
    }
)

type RootReducerType = typeof store.getState
export type appStoreType = ReturnType<RootReducerType>

let store = createStore(reducers)


export default store