import { credenciales } from "../index.js"

export async function ValidateCredentials(req, res){
    const { user, pass } = req.headers;
    let documento = null;
    try{
        documento= await credenciales.query(`select*from credenciales where usuario='${user}'`)

        if (!documento.rows.length) {
            res.status(404).send("Usuario no registrado");
          } else if (documento.rows[0].password === pass) {
            res.status(200).send("Éxito");
          } else {
            res.status(400).send("Contraseña incorrecta");
          }
          
    }catch(err){
        res.status(400)
        res.json(err)
        return
    }

}