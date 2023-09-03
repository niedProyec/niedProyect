import { credenciales } from "../index.js";

export async function createCase(req,res){
    const {cliente, tecnico, titulo, comentario, seguimiento, fecha} = req.headers;

    let documento = null
    try{
        documento = await credenciales.query(`select create_ticket('${cliente}','${tecnico}','${titulo}','${comentario}','${seguimiento}','${fecha}')`)
        res.status(200).json({ message: "Éxito" });
    }catch(err){
        res.status(400)
        res.json(err)
        return
    }
}

export async function listNewCase(req,res){
    const { identificacion } = req.headers
    let documento = null
    try{
        documento = await credenciales.query(`select*from list_new_tk('${identificacion}')`);
        res.status(200).json(documento.rows);
    }catch(err){
        res.status(400)
        res.json(err)
    }
}

export async function listProcessCase(req,res){
    const { identificacion } = req.headers
    let documento = null
    try{
        documento = await credenciales.query(`select*from list_process_tk('${identificacion}')`);
        res.status(200).json(documento.rows);
    }catch(err){
        res.status(400)
        res.json(err)
    }
}

export async function caseDescription(req,res){
    const { id } = req.headers;
    let documento = null;

    try{
        documento = await credenciales.query(`select*from case_description(${id})`)
        res.status(200).json(documento.rows)
    }catch(err){
        res.status(400)
        res.json(err)
    }
}

export async function case_commits(req,res){
    const { id } = req.headers;
    let documento = null;

    try{
        documento = await credenciales.query(`select*from case_commit(${id})`);
        res.status(200).json(documento.rows)
    }catch(err){
        res.status(400)
        res.json(err)
    }
}

export async function add_commit(req,res){
    const {comentario, tecnico, estado, ticket} = req.headers;
    let documento = null;

    try{
        documento = await credenciales.query(`select case_commit_TK('${comentario}','${tecnico}', ${estado}, ${ticket})`);
        res.status(200).json({ message: "Éxito" });
    }catch(err){
        res.status(400)
        res.json(err)
    }
}