import { API_URL } from "./ApiUrl.js"

export async function PassUpdate(user,pass){
    const res = await fetch(API_URL+'/user',{
        method:'PUT',
        headers:{
            user,
            pass
        }
    })
    return res.json()
}