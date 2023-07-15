import { API_URL } from "./ApiUrl.js"

// el servicio de Auth nos permite validar las credenciales de usuario
// se llama al back y mediante el metodo get se envian el usuario y contraseña
// y se resive una respuesta que se envia para continuar con el proceso

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