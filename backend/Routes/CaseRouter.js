import express from "express";
import { add_commit, caseDescription, case_commits, createCase, listNewCase, listProcessCase } from "../controllers/CaseControllers.js";

const CaseRouter = express.Router();

CaseRouter.post("/",(req,res)=>{
    createCase(req,res);
});

CaseRouter.get("/newU",(req,res)=>{
    listNewCase(req,res);
})

CaseRouter.get("/proc",(req,res)=>{
    listProcessCase(req,res);
})

CaseRouter.get("/caseDesp",(req,res)=>{
    caseDescription(req,res);
})

CaseRouter.get("/commit",(req,res)=>{
    case_commits(req,res);
})

CaseRouter.put("/add",(req,res)=>{
    add_commit(req,res)
})

export default CaseRouter