import express from "express";
import { createCase, listNewCase } from "../controllers/CaseControllers.js";

const CaseRouter = express.Router();

CaseRouter.post("/",(req,res)=>{
    createCase(req,res)
});

CaseRouter.get("/newU",(req,res)=>{
    listNewCase(req,res)
})

export default CaseRouter