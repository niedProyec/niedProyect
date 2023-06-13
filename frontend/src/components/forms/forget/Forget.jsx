import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Forget.css';
import { process } from "../../../models/process";
import Input from "../Input/Input";
import Boton from "../Boton/Boton";

const Forget = ()=>{
    const [step, setStep] = useState(process.Send);
    const [user, setUser] = useState()

    const Navigate = useNavigate()
    
    const codeSend = (evento, userName)=>{
        evento.preventDefault();
        setUser(userName);
        alert(userName);
        setStep(process.Validate);
    }

    const validateCode = (evento, code)=>{
        evento.preventDefault();
        alert(code);
        setStep(process.Change);
    }

    const passChange = (evento, pass, valida)=>{
        evento.preventDefault();
        if(pass==valida){
            alert("contraseña cambiada");
            Navigate('/inicio');
        }else{
            alert("las contraseñas no son iguales")
        }
    }

    const SendCode = ()=>{

        const [userName, setUserName] = useState();
        
        return(
            <form onSubmit={(evento)=>codeSend(evento, userName)}>
                <div className="distance">
                    <Input id='vUser' style='login' required={true} onChange={(val)=>setUserName(val.target.value)}>USUARIO:</Input>
                </div>
                <div className="distance form-container">
                    <Boton style='login' type='submit'>enviar codigo</Boton>
                </div>
                <div className="paraf-rec">
                    <p>Se enviara un codigo de verificacion para validar la identidad del usuario</p>
                </div>
            </form>
        )
    }

    const CodeValidate =()=>{

        const [code, setCode] = useState()

        return(
            <form onSubmit={(evento)=>validateCode(evento,code)}>
                <div className="distance">
                    <Input id="codVer" type='text' style='login' required={true} onChange={(val)=>setCode(val.target.value)}>Codigo de verificación:</Input>
                </div>
                <div className="distance form-container">
                    <Boton style='login'>Validar</Boton>
                </div>
                <div className="paraf-rec">
                    <p>se envió un codigo de verificacion al correo *****@***.com</p>
                </div>
            </form>
        )
    }

    const ChangePass =()=>{

        const [pass1, setPass1] = useState();
        const [valida, setValida] = useState();
        return(
            <form onSubmit={(evento)=>passChange(evento,pass1,valida)}>
                <div className="distance">
                    <Input id="newPass" type='password' style='login' required={true} onChange={(val)=>setPass1(val.target.value)}>Nueva Contraseña:</Input>
                </div>
                <div className="distance">
                    <Input id="validatePass" type='password' style='login' required={true} onChange={(val)=>setValida(val.target.value)}>Confirmar Contraseña:</Input>
                </div>
                <div className="distance form-container">
                    <Boton style='login'>Cambiar</Boton>
                </div>
                <div className="paraf-rec">
                    <p>ingresa tu nueva contraseña para ingresar al sistema</p>
                </div>
            </form>            
        )
    }

    const RenderProcess =()=>{
        if(step==process.Send) return<SendCode></SendCode>
        if(step==process.Validate) return<CodeValidate></CodeValidate>
        if(step==process.Change) return<ChangePass></ChangePass>
    }

    return(
        <div className="form-rec">
            <div className="form-container separator">
                <p className="title">Recuperar contraseña</p>
            </div>
            <div className="separator">
                <RenderProcess></RenderProcess>
            </div>
            <div className="form-container padd">
                <Link to='/inicio/login'>volver</Link>
            </div>
        </div>
    )
}

export default Forget