import axios from "axios";

const instance = axios.create({
    withCredentials: true,  //Запрос на сервер с withCredentials, чтобы к серваку с куки пришла наша айди
    headers: {"API-KEY": "1dbc4cf7-1f30-4d66-936b-be5fca3239ce"}, //api key
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    unFollowUser(id: string) {
        return instance.delete(`follow/${id}`,)
            .then(response => response.data)
    },

    followUser(id: string) {
        return instance.post(`follow/${id}`, {},)
            .then(response => response.data)
    },
} //  создали единый объект  usersAPI у которого будем дёрагть методы


export const profileAPI = {
    userProfile(userId: string) {
        return instance.get<UserProfileResponse>(`profile/${userId}`)

    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)

    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    updatePhoto(photo: string) {
        let formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profileData: any) {
        return instance.put(`profile`, profileData)
    }
}


export const authAPI = {
    authMe() {
        return instance.get<ResponseAuthType<{ id: number, email: string, login: string }>>(`auth/me`,)
            .then(response => response.data)
    },
    loginMe(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instance.post<ResponseAuthType<{ userId: number }>>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<ResponseAuthType>(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`,)
            .then(response => response.data)
    },
}

///////// TYPE

type UserProfileResponse = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

    photos: {
        small: string
        large: string
    }

}

type ResponseAuthType<T = {}> = {
    resultCode: number
    messages: []
    data: T
}

