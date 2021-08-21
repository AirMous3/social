
import {ActionsType} from "./ActionsTypes";


export const followAC = (userID: string) => ({type: "FOLLOW", userID}) as const
export const unfollowAC = (userID: string) => ({type: "UNFOLLOW", userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users }) as const
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCountAC = (totalUsers: number) => ({type: "SET-TOTAL-USERS-COUNT", totalUsers}) as const


export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UserType = {
    id: string
    photos: PhotosType
    follow: boolean
    name: string
    status: string
    location: LocationType



}
export type PhotosType ={
    small: string
    large: string
}
export type LocationType = {
    city: string
    country: string
}

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1

}


export const UsersReducer = (state:initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":

            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: true} : u)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: false} : u)}
        case "SET-USERS":
            return { ...state , users: [...action.users ] }
        case "SET-CURRENT-PAGE":
            return { ...state , currentPage: action.currentPage }
        case "SET-TOTAL-USERS-COUNT":
            return { ...state , totalUsersCount: action.totalUsers}
        default:
            return state
    }

}


