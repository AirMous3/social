import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../api/api';
import { authAPI } from './../api/api';
import { AppStoreType } from './reduxStore';

export type ActionsAuthReducerType = ReturnType<typeof setAuthUserData>




export type initialStateType = {

    data: {
        id: number | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean,
}


let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
} as initialStateType


export const authReducer = (state: initialStateType = initialState, action: ActionsAuthReducerType): initialStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                data: { ...action.data },
                isAuth: action.isAuth
            }
        default:
            return state
    }

}
/////////////////////////////////// AC


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({ type: "SET-AUTH-USER-DATA", data: { id, email, login }, isAuth }) as const


/////////////////////////////////// THUNKS 


export const authThunk = () => (dispatch: Dispatch<ActionsAuthReducerType>) => {

    return usersAPI.authMe()
        .then(data => {

            if (data.resultCode === 0) {

                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }

        })

}

type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionsAuthReducerType>

export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {

    authAPI.loginMe(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(authThunk())
            }
            else {
                alert(res.data.messages.length > 0 ? res.data.messages : 'some error')
            }
        })

}


export const logoutThunk = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}