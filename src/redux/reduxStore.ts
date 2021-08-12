import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {UsersReducer} from "./UsersReducer";





let rootReducer = combineReducers(
    {
       dialogsPage: dialogsReducer,
       profilePage: profileReducer,
        usersPage: UsersReducer
    }
)


export type AppStoreType = ReturnType<typeof rootReducer>

const store: Store<AppStoreType> = createStore(rootReducer)


export default store