import { API_URL } from "./ApiUrl.js"

export async function ListClient() {
    const res = await fetch(API_URL+'/user/cliente',{
        method:'GET'
    })
    return res.json()
}
