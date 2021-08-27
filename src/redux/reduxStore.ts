import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import { usersReducer } from "./UsersReducer";
import {authReducer} from "./authReducer";






let rootReducer = combineReducers(
    {
       dialogsPage: dialogsReducer,
       profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)


export type AppStoreType = ReturnType<typeof rootReducer>

const store: Store<AppStoreType> = createStore(rootReducer)


export default store