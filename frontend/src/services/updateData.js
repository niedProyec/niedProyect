import { API_URL } from "./ApiUrl.js"

// el servicio de updateuserdata actualiza los datos del usuario
// se llama al back y mediante el metodo put se envian los datos del usario
// y se resive una respuesta y se envia para continuar con el proceso

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