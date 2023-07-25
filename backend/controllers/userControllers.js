import { credenciales } from "../index.js"

// esta funcion recibe dos parametros
// req trae la informacion de usuario y contraseña
// res devuelve el resultado
// en esta funcion se valida las credenciales del usuario

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

// esta funcion recibe dos parametros
// req trae la informacion de usuario 
// res devuelve el resultado 
// la funcion retorna la informacion del usuario

export async function DataUser(req,res){
  const { user } = req.headers;
  let documento = null;
  try{
    documento = await credenciales.query(`select*from user_data('${user}')`)
    res.status(200).json(documento.rows);
  }catch(err){
    res.status(400)
    res.json(err)
    return
  }
}


// esta funcion recibe dos parametros
// req trae la informacion de usuario y la nueva contraseña
// res devuelve el resultado de exito
// la funcion tiene como proposito actualizar la contraseña del usuario

export async function UpdateCredentials(req,res){
  const {user, pass } = req.headers;
  let documento = null;
  try{
    documento = await credenciales.query(`select update_pass('${user}','${pass})`)
    res.status(200).json({ message: "Éxito" });
  } catch(err){
    res.status(400)
    res.json(err)
  }
}

// esta funcion recibe dos parametros
// req trae la informacion de usuario
// res devuelve el resultado de exito
// la funcion tiene como proposito actualizar los datos del usuario

export async function UpdateUserData(req, res){
  const {name, lastname, cel, user} = req.headers;
  let documento = null;
  try{
    documento = await credenciales.query(`select update_user_data('${name}','${lastname}','${cel}','${user}')`);
    res.status(200).json({ message: "Éxito" });
  }catch(err){
    res.status(400)
    res.json(err)
  }
}


// esta funcion recibe dos parametros
// req trae la informacion requerida para del usuario o cliente que se va a agregar
// res devuelve exito como resultado
// la funcion tiene el proposito de insertar nuevos usuarios

export async function AddUser(req, res){
  const {cedula, name, lastname, cel, correo, direccion, rol, nom, pass} = req.headers;
  let documento = null;
  try{
    documento = await credenciales.query(`select create_user('${cedula}','${name}','${lastname}','${cel}','${correo}','${direccion}','${rol}','${nom}','${pass}')`)
    res.status(200).json({ message: "Exito"});
  }catch(err){
    res.status(400)
    res.json(err)
  }
}

export async function ListUsers(req, res){
  let documento = null;
  try{
    documento = await credenciales.query('select user_list()');
    res.status(200).json(documento.rows)
  }catch(err){
    res.status(400)
    res.json(err)
  }
}