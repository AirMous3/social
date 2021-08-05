import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";





let rootReducer = combineReducers(
    {
       dialogsPage: dialogsReducer,
       profilePage: profileReducer
    }
)


export type AppStoreType = ReturnType<typeof rootReducer>

const store: Store<AppStoreType> = createStore(rootReducer)


export default store