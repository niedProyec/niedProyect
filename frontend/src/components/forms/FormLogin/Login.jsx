import React, { useState } from 'react';
import Input from '../Input/Input.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Boton from '../Boton/Boton.jsx';
import './Login.css'

{/**este componente es el de login el que nos permite validar el usuario */}

const Login = ()=>{

    /**
     * se crea una contante para manejar las rutas de acuerdo a la accion requerida
     */

    const Navigate = useNavigate();

    /**
     * se manejan dos constantes una para el nombre de usuario y otra para la contraseña
     */

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    /**
     * esta funcion valida los datos ingresados y verifica que estos esten registrados en la base
     * de datos
     * y si los datos son correctos se ingresa al panel del usuario
     */

    function validate(evento){
        evento.preventDefault();
        alert(user+" "+pass)
        Navigate('/panel');
    }
    
    /**
     * este componente contiene un titulo
     * un formulario en el que se solicita el usuario y contraseña
     * un link en caso de que al usuario se le olvide la contraseña
     * una opcion para guardar los datos de ingreso
     * y un boton para cargar los datos y validar si son correctos o no
     */

    return(
        <form onSubmit={(evento)=>validate(evento)}>
            <div className="form-container separator flex">
                <p className='title'>Inicie sesion</p>
            </div>
            <div className="distance">
                <Input id='user' type='text' style="login" required={true} onChange={(val)=>setUser(val.target.value)}>USUARIO:</Input>
            </div>
            <div className="distance">
                <Input id='password' type='password' style="login" required={true} onChange={(val)=>setPass(val.target.value)}>CONTRASEÑA:</Input>
            </div>
            <div className="recuperar flex">
                <Link to="/inicio/forget" className='for-pass'>¿Olvidó su contraseña?</Link>
            </div>
            <div className='separator padd'>
                <Input pos='reverse'type='checkbox' id='remember'>recuerdame</Input>
            </div>
            <div className="form-container distance flex">
                <Boton style='login'>Ingresar</Boton>
            </div>
        </form>
    )
}

export default Login