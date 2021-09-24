import { Dispatch } from 'redux';
import { usersAPI } from '../api/api';
import { authAPI } from './../api/api';

export type ActionsAuthReducerType = ReturnType<typeof setAuthUserData>




export type initialStateType = {

    data: {
        id: number,
        email: string,
        login: string
    },
    isAuth: boolean
}


let initialState = {
    data: {
        id: null as number | null,
        email: null as string | null,
        login: null as string | null
    },
    isAuth: false
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

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({ type: "SET-AUTH-USER-DATA", data: { id, email, login }, isAuth }) as const

export const authThunk = () => {
    return (dispatch: Dispatch<ActionsAuthReducerType>) => {

        usersAPI.authMe()
            .then(data => {

                if (data.resultCode === 0) {

                    let { id, email, login } = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }

            })
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.loginMe(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(authThunk())
            }
        })

}


export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                // @ts-ignore
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}