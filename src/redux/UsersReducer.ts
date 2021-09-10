export type ActionsUsersReducerType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleInProgress>
    | ReturnType<typeof toggleIsFollowingProgress>


export const follow = (userID: string) => ({type: "FOLLOW", userID}) as const
export const unfollow = (userID: string) => ({type: "UNFOLLOW", userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: "SET-USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCount = (totalUsers: number) => ({type: "SET-TOTAL-USERS-COUNT", totalUsers}) as const
export const toggleInProgress = (progress: boolean) => ({type: "TOGGLE-IS-IN-PROGRESS", progress}) as const
export const toggleIsFollowingProgress = (progress: boolean, userId: string) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    progress,
    userId
}) as const


export type initialStateType = typeof initialState

export type UserType = {
    id: string
    photos: PhotosType
    follow: boolean
    name: string
    status: string
    location: LocationType

}
export type PhotosType = {
    small: string
    large: string
}
export type LocationType = {
    city: string
    country: string
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isInProgress: false,
    isFollowingProgress: [] as string[]

}


export const usersReducer = (state: initialStateType = initialState, action: ActionsUsersReducerType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow: false} : u)}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsers}
        case "TOGGLE-IS-IN-PROGRESS":
            return {...state, isInProgress: action.progress}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                isFollowingProgress: action.progress ?
                    [...state.isFollowingProgress, action.userId] :
                    state.isFollowingProgress.filter(u => u !== action.userId)
            }
        default:
            return state
    }

}


