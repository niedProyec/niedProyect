import express from "express";
import { DataUser, ValidateCredentials, UpdateCredentials, UpdateUserData } from "../controllers/userControllers.js";

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

userRouter.put("/",(req,res)=>{
    UpdateCredentials(req,res)
})

userRouter.put("/updata",(req,res)=>{
    UpdateUserData(req,res)
})


export default userRouter;