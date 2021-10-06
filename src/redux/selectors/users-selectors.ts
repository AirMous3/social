// users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isInProgress: state.usersPage.isInProgress,
//         isFollowingProgress: state.usersPage.isFollowingProgress,

import { AppStoreType } from "../reduxStore";

export const getUsers = (state: AppStoreType) => state.usersPage.users
export const getPageSize = (state: AppStoreType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStoreType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStoreType) => state.usersPage.currentPage
export const getIsProgress = (state: AppStoreType) => state.usersPage.isInProgress
export const getIsFollowingProgress = (state: AppStoreType) => state.usersPage.isFollowingProgress



