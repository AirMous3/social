import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";





let reducers = combineReducers(
    {
       dialogsPage: dialogsReducer,
       profilePage: profileReducer
    }
)


export type appStoreType = ReturnType<typeof reducers>

const store: Store<appStoreType> = createStore(reducers)


export default store