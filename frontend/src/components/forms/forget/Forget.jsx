import { Link } from "react-router-dom";
import './Forget.css';
import { useState } from "react";
import { process } from "../../../models/process";
import Input from "../Input/Input";
import Boton from "../Boton/Boton";

const Forget = ()=>{

    const [step, setStep] = useState(process.Validate);

    function SendCode(){
        return(
            <form>
                <div className="distance">
                    <Input id='vUser' type='text' style='login' required='true'>USUARIO:</Input>
                </div>
                <div className="distance form-container">
                    <Boton style='login'>enviar codigo</Boton>
                </div>
                <div className="paraf-rec">
                    <p>Se enviara un codigo de verificacion para validar la identidad del usuario</p>
                </div>
            </form>
        )
    }

    function CodeValidate(){
        return(
            <form>
                <div className="distance">
                    <Input id="codVer" type='text' style='login' required="true">Codigo de verificación:</Input>
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

    function ChangePass(){
        return(
            <div>cambiar</div>
        )
    }

    function ForPa(){
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
                <ForPa></ForPa>
            </div>
            <div className="form-container padd">
                <Link to='/inicio/login'>volver</Link>
            </div>
        </div>
    )
}

export default Forget