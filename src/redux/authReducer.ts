import { Dispatch } from 'redux';
import { usersAPI } from '../api/api';
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
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserData = (id: number, email: string, login: string) => ({ type: "SET-AUTH-USER-DATA", data: { id, email, login } }) as const

export const authThunk = () => {
    return (dispatch: Dispatch<ActionsAuthReducerType>) => {

        usersAPI.authMe()
            .then(data => {

                if (data.resultCode === 0) {

                    let { id, email, login } = data.data
                    dispatch(setAuthUserData(id, email, login))
                }

            })
    }
}