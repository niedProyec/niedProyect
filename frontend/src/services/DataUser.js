import { API_URL } from "./ApiUrl.js"

// el servicio de dataUser nos trae los datos del usuario
// se llama al back y mediante el metodo get se envian el usuario
// y se resive una respuesta con la informacion solicitada y se envia al front

export async function UserData(user){
    const res = await fetch(API_URL+'/user/data',{
        method:'GET',
        headers:{
            user
        }
    })
    return res.json()
}