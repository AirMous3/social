

type ActionsLoginType = ReturnType<typeof login>

export type initialStateType = {
    login: string
    password: string
    rememberMe: boolean

}


let initialState = {

    login: "",
    password: "",
    rememberMe: false

} as initialStateType


export const loginReducer = (state: initialStateType = initialState, action: ActionsLoginType): initialStateType => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

export const login = (login: string, password: string, rememberMe: boolean) => ({ type: 'LOGIN', payload: { login, password, rememberMe } }) as const