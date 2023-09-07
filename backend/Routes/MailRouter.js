import express from "express";
import { sendEmail } from "../controllers/MailControllers.js";

const mailRouter = express.Router();

mailRouter.post("/send",(req,res)=>{
    sendEmail(req,res);
})

export default mailRouter