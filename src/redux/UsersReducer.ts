
import {ActionsType} from "./ActionsTypes";


export const followAC = (userID: string) => ({type: "FOLLOW", userID}) as const
export const unfollowAC = (userID: string) => ({type: "UNFOLLOW", userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users }) as const


export type initialStateType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    avatar: string
    follow: boolean
    fullName: string
    status: string
    location: LocationType

}
export type LocationType = {
    city: string
    country: string
}

let initialState: initialStateType = {
    users: [],
}


export const UsersReducer = (state:initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":

            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: true} : u)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: false} : u)}
        case "SET-USERS":
            return { users: [...state.users, ...action.users]}
        default:
            return state
    }

}


