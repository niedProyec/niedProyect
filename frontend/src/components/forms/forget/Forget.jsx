import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Forget.css';
import { process } from "../../../models/process";
import Input from "../Input/Input";
import Boton from "../Boton/Boton";

{/**en caso de que al usuario se le olvide su contraseña */}

const Forget = ()=>{

    /**
     * se crean dos constantes, en una se almacena el estado del proceso, para esto
     * se utilizan los estados definidos en process que son tres respectivamente,
     * y su estado inicial es send.
     * la segunda constante es para almacenar el nombre de usuario
     */

    const [step, setStep] = useState(process.Send);
    const [user, setUser] = useState()

    /**
     * se crea una constante navigate para navegar en las difetentes rutas como sea requerido
     */

    const Navigate = useNavigate()

    /**
     * esta funcion valida el usuario y envia un codigo de verificacion al correo que corresponda
     * al usuario ingresado, y si se envia el codigo, este cambia de estado a validate
     */
    
    const codeSend = (evento, userName)=>{
        evento.preventDefault();
        setUser(userName);
        alert(userName);
        setStep(process.Validate);
    }

    /**
     * esta funcion valida el codigo de verificaacion que ingresa el usuario y si es el mismo que
     * se le invia por correo entonces se cambia de estado a change
     */

    const validateCode = (evento, code)=>{
        evento.preventDefault();
        alert(code);
        setStep(process.Change);
    }

    /**
     * esta funcion permite el cambio de la contraseña, para esto hay que ingresarla dos veces
     */

    const passChange = (evento, pass, valida)=>{
        evento.preventDefault();
        if(pass==valida){
            alert("contraseña cambiada");
            Navigate('/inicio');
        }else{
            alert("las contraseñas no son iguales")
        }
    }

    /**
     * este componente renderiza un formulario para que el usuario ingrese su nombre de usuario 
     * para enviar el codigo de verificacion al correo
     */

    const SendCode = ()=>{

        const [userName, setUserName] = useState();
        
        return(
            <form onSubmit={(evento)=>codeSend(evento, userName)}>
                <div className="distance">
                    <Input id='vUser' style='login' required={true} onChange={(val)=>setUserName(val.target.value)}>USUARIO:</Input>
                </div>
                <div className="distance form-container flex">
                    <Boton style='login' type='submit'>enviar codigo</Boton>
                </div>
                <div className="paraf-rec">
                    <p>Se enviara un codigo de verificacion para validar la identidad del usuario</p>
                </div>
            </form>
        )
    }

    /**
     * este compoenete se renderiza para que el usuario ingrese el codigo de verificacion que 
     * se le ha enviado con anterioridad, esto con el fin de validar si en verdad es el usuario
     * correspondiente a la cuenta
     */

    const CodeValidate =()=>{

        const [code, setCode] = useState()

        return(
            <form onSubmit={(evento)=>validateCode(evento,code)}>
                <div className="distance">
                    <Input id="codVer" type='text' style='login' required={true} onChange={(val)=>setCode(val.target.value)}>Codigo de verificación:</Input>
                </div>
                <div className="distance form-container flex">
                    <Boton style='login'>Validar</Boton>
                </div>
                <div className="paraf-rec">
                    <p>se envió un codigo de verificacion al correo *****@***.com</p>
                </div>
            </form>
        )
    }

    /**
     * esta funcion se renderiza para realziar el cambio de contraseña
     */

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
                <div className="distance form-container flex">
                    <Boton style='login'>Cambiar</Boton>
                </div>
                <div className="paraf-rec">
                    <p>ingresa tu nueva contraseña para ingresar al sistema</p>
                </div>
            </form>            
        )
    }

    /**
     * esta funcion renderiza el componente correspondiente de acuerdo al estado en el que
     * se encuentre el proceso
     */

    const RenderProcess =()=>{
        if(step==process.Send) return<SendCode></SendCode>
        if(step==process.Validate) return<CodeValidate></CodeValidate>
        if(step==process.Change) return<ChangePass></ChangePass>
    }

    /**
     * se retorna el formulario correspondiente
     */

    return(
        <div className="form-rec">
            <div className="form-container separator flex">
                <p className="title">Recuperar contraseña</p>
            </div>
            <div className="separator">
                <RenderProcess></RenderProcess>
            </div>
            <div className="form-container distance flex">
                <Link to='/inicio/login'>volver</Link>
            </div>
        </div>
    )
}

export default Forget