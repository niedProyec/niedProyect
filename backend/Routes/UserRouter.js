import express from "express";
import { DataUser, ValidateCredentials, UpdateCredentials, UpdateUserData, AddUser, ListUsers } from "../controllers/userControllers.js";

const userRouter = express.Router();

// metodo POST
// se direcciona para agregar un nuevo usuario

userRouter.post("/",(req, res)=>{
    AddUser(req, res);
});

// metodo GET
// se dirreciona para validar las credenciales del usuario
userRouter.get("/",(req,res)=>{
    ValidateCredentials(req,res);
});

//se direcciona para obtener todos los datos del usuario
userRouter.get("/data",(req,res)=>{
    DataUser(req,res);
});

userRouter.get("/users",(req,res)=>{
    ListUsers(req, res);
});


//actualizar
//PUT
//se direcciona para actualizar la contraseña del usuario
userRouter.put("/",(req,res)=>{
    UpdateCredentials(req,res)
});

//se  direcciona para actualizar los datos del usuario
userRouter.put("/updata",(req,res)=>{
    UpdateUserData(req,res)
});


export default userRouter;