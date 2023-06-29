import express from "express";
import { ValidateCredentials } from "../controllers/userControllers.js";

const userRouter = express.Router();

//crear
//POST


//leer
//GET
userRouter.get("/",(req,res)=>{
    ValidateCredentials(req,res);
})

//actualizar
//PUT


export default userRouter;