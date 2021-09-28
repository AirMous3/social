import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from './appReducer';
import { authReducer } from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./UsersReducer";






let rootReducer = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
    }
)


export type AppStoreType = ReturnType<typeof rootReducer>

const store: Store<AppStoreType> = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store