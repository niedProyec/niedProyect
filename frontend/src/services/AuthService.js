import { API_URL } from "./ApiUrl.js"

export async function LoginService(user,pass){
    const res = await fetch(API_URL+'/user',{
        method:'GET',
        headers:{
            user,
            pass
        }
    })
    return res
}