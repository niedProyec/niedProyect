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