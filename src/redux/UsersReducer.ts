import {v1} from "uuid";
import {ActionsType} from "./ActionsTypes";

export const followAC = (userID: string) => ({type: "FOLLOW", userID}) as const
export const unfollowAC = (userID: string) => ({type: "UNFOLLOW", userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users }) as const


export type initialStateType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
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
    users: [
        {
            id: v1(),
            follow: false,
            fullName: "Ilya",
            status: "React-Readux Developer",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            follow: true,
            fullName: "Sasha",
            status: "Student of IT-INCUBATOR",
            location: {city: "Baranovichi", country: "Belarus"}
        },
        {
            id: v1(),
            follow: false,
            fullName: "Dasha",
            status: "Did u see something cool?",
            location: {city: "Budapest", country: "Hungary"}
        },
        {id: v1(), follow: true, fullName: "Masha", status: "Lov3 U", location: {city: "Moscow", country: "Russia"}},
        {id: v1(), follow: false, fullName: "Lesha", status: "", location: {city: "Kiev", country: "Ukraine"}},
        {id: v1(), follow: true, fullName: "Pasha", status: "OtJIu4HUK", location: {city: "Gomel", country: "Belarus"}},
    ],
}


export const UsersReducer = (state:initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: true} : u)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: false} : u)}
        case "SET-USERS":
            return {...state, users: {...state.users, ...action.users}}
        default:
            return state
    }

}


