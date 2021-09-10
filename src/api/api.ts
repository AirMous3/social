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
    unFollowUser(id: string){
        return instance.delete(`follow/${id}`, )
            .then(response => response.data)
    },

    followUser(id: string){
        return instance.post(`follow/${id}`, {}, )
            .then(response => response.data)
    },
    authMe(){
        return  instance.get(`auth/me`, )
            .then(response => response.data)
    },
    userProfile(userId:string) {
        return instance.get(`profile/`+ userId)
            .then(response => response.data)

    }
} //  создали единый объект  usersAPI у которого будем дёрагть методы

