import express from "express";
import { DataUser, ValidateCredentials } from "../controllers/userControllers.js";

const userRouter = express.Router();

//crear
//POST



// metodo GET
//se dirreciona para validar las credenciales
userRouter.get("/",(req,res)=>{
    ValidateCredentials(req,res);
})

//se direcciona para tener todos los datos del usuario
userRouter.get("/data",(req,res)=>{
    DataUser(req,res);
})

//actualizar
//PUT


export default userRouter;