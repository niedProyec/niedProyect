import { API_URL } from "./ApiUrl.js"

export async function UpdateUserData(nombre, apellido, celular, userName){
    const res = await fetch(API_URL+'/user/updata',{
        method:'PUT',
        headers:{
            name: nombre,
            lastname: apellido,
            cel:celular,
            user:userName
        }
    })
    console.log('Respuesta del servidor:', res);
    return res.json()
}