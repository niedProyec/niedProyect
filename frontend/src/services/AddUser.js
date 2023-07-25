import { API_URL } from "./ApiUrl.js"

export async function AddUser(cedula, name, lastname, cel, correo, direccion, rol, nom, pass){
    const res = await fetch(API_URL+'/user',{
        method:'POST',
        headers:{
            cedula,
            name,
            lastname,
            cel,
            correo,
            direccion,
            rol,
            nom,
            pass
        }
    })
    return res.json()
}