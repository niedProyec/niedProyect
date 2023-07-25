import { API_URL } from "./ApiUrl.js"

export async function ListUser() {
    const res = await fetch(API_URL+'/user/users',{
        method:'GET'
    })
    return res.json()
}
