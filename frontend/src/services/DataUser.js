import { API_URL } from "./ApiUrl.js"

export async function UserData(user){
    const res = await fetch(API_URL+'/user/data',{
        method:'GET',
        headers:{
            user
        }
    })
    return res.json()
}