import { API_URL } from "./ApiUrl.js"

export async function CreateTicket(cliente, tecnico, titulo, comentario,seguimiento){
    const fechaActual = new Date();

    // Obtiene el día, el mes y el año de la fecha actual
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan en 0, así que sumamos 1
    const año = fechaActual.getFullYear();

    // Formatea la fecha en "día mes año"
    const fecha = `${dia}/${mes}/${año}`;
    alert(fecha)
    const res = await fetch(API_URL+'/case/',{
        method:'POST',
        headers:{
            cliente,
            tecnico,
            titulo,
            comentario,
            seguimiento,
            fecha
        }
    })
    return res.json();
}

export async function listNewTk(identificacion){
    const res = await fetch(API_URL+'/case/newU',{
        method:'GET',
        headers:{
            identificacion
        }
    });
    return res.json()
}

export async function listProcTk(identificacion){
    const res = await fetch(API_URL+'/case/proc',{
        method:'GET',
        headers:{
            identificacion
        }
    });
    return res.json()
}

export async function despCase(id){
    const res = await fetch(API_URL+'/case/caseDesp',{
        method:'GET',
        headers:{
            id
        }
    });
    return res.json();
}

export async function commitCase(id){
    const res = await fetch(API_URL+'/case/commit',{
        method:'GET',
        headers:{
            id
        }
    });
    return res.json();
}

export async function addCommit(comentario, tecnico, estado, ticket){
    const res = await fetch(API_URL+'/case/add',{
        method:'PUT',
        headers:{
            comentario,
            tecnico,
            estado,
            ticket
        }
    });
    return res.json();
}