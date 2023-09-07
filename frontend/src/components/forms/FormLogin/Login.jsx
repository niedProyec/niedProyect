import { LoginService } from '../../../services/AuthService.js';
import { CRYP_PASS } from '../../../services/PassService.js'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AES, enc } from 'crypto-js';
import Input from '../Input/Input.jsx';
import Boton from '../Boton/Boton.jsx';
import './Login.css'

//este componente es el de login el que nos permite validar el usuario

const Login = ()=>{


    // se crea una contante para manejar las rutas de acuerdo a la accion requerida 

    const Navigate = useNavigate();

    // se crea una constante en que se almacena la contraseña de encriptacion

    const claveEncriptacion = CRYP_PASS;

    // se maneja la constante de user y pass para las credenciales del usuario
    // remember es para saber si el usuario quiere recordar las credenciales
    // cookies se almacenan los datos que esten almacenadas en las cookies

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [remember, setRemenber] = useState(false);
    const [cookies, setCookie] = useCookies(['user', 'password']);

    // esta funcion valida los datos ingresados y verifica que estos esten registrados en la base de datos
    // y si los datos son correctos se ingresa al panel del usuario
    // tambien valida si la opcion de remember esta activa guarda los datos en las cookies

    async function validate(evento){
        evento.preventDefault();
        if(remember){
            setCookie('user', user, { expires: new Date('9999-12-31') });
            setCookie('password', AES.encrypt(pass, claveEncriptacion).toString(), { expires: new Date('9999-12-31') });
        }
        const res = await LoginService(user, pass)
        if(res.ok){
            localStorage.setItem('userName',user);
            Navigate('/panel/home');
        }else{
            alert('datos incorrectos');
        }
    }

    // cambial el estado de la constante remember

    function changeRemember (){
        setRemenber(!remember)
    }
    
    // se valida si hay cookies guardadas y si es así entonces se colocan en el formulario de login

    useEffect(() => {
        if (cookies.user && cookies.password) {
          setUser(cookies.user);
          setPass(AES.decrypt(cookies.password, claveEncriptacion).toString(enc.Utf8));
        }
      }, [cookies]);

    // este componente contiene un titulo
    // un formulario en el que se solicita el usuario y contraseña
    // un link en caso de que al usuario se le olvide la contraseña
    // una opcion para guardar los datos de ingreso
    // y un boton para cargar los datos y validar si son correctos o no

    return(
        <form onSubmit={(evento)=>validate(evento)}>
            <div className="form-container separator flex">
                <p className='title'>Inicie sesion</p>
            </div>
            <div className="distance">
                <Input value={user} id='user' type='text' style="login" required={true} onChange={(val)=>setUser(val.target.value)}>USUARIO:</Input>
            </div>
            <div className="distance">
                <Input value={pass} id='password' type='password' style="login" required={true} onChange={(val)=>setPass(val.target.value)}>CONTRASEÑA:</Input>
            </div>
            <div className='separator padd'>
                <Input pos='reverse'type='checkbox' id='remember' onChange={changeRemember}>recuerdame</Input>
            </div>
            <div className="form-container distance flex">
                <Boton style='login'>Ingresar</Boton>
            </div>
        </form>
    )
}

export default Login