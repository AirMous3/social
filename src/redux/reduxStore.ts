import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {StoreType} from "./store";




let reducers = combineReducers(
    {
       dialogsPage: dialogsReducer,
       profilePage: profileReducer
    }
)


let store: StoreType = createStore(reducers)


export default store