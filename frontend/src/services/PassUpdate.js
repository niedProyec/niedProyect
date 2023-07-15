import { API_URL } from "./ApiUrl.js"

// el servicio de passupdate envia el usuario y contraseña para actualizar
// se llama al back y mediante el metodo put se envian el usuario y contraseña
// y se resive una respuesta que se envia para seguir con los procesos

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