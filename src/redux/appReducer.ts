import { ThunkAction } from 'redux-thunk';
import { authThunk } from './authReducer';
import { AppStoreType } from './reduxStore';


type AppReducerActionsType = ReturnType<typeof initializedSuccess>

type InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED':
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
//////// AC
export const initializedSuccess = () => ({ type: 'APP/INITIALIZED' }) as const



//////// THUNK 

type ThunkType = ThunkAction<void, AppStoreType, unknown, AppReducerActionsType>


export const initializeApp = (): ThunkType => (dispatch) => {

    let promise = dispatch(authThunk())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}