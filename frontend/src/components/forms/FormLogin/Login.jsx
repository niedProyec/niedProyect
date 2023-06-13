import React, { useState } from 'react';
import Input from '../Input/Input.jsx';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton.jsx';
import './Login.css'


const Login = ()=>{

    const [user, setUser] = useState();
    
    return(
        <form>
            <div className="form-container separator">
                <p className='title'>Inicie sesion</p>
            </div>
            <div className="distance">
                <Input id='user' type='text' style="login" required={true} onChange={(val)=>setUser(val.target.value)}>USUARIO:</Input>
            </div>
            <div className="distance">
                <Input id='password' type='password' style="login" required={true}>CONTRASEÑA:</Input>
            </div>
            <div className="recuperar">
                <Link to="/inicio/forget" className='for-pass'>¿Olvidó su contraseña?</Link>
            </div>
            <div className='separator padd'>
                <Input pos='reverse'type='checkbox' id='remember'>recuerdame</Input>
            </div>
            <div className="form-container distance">
                <Boton style='login'>Ingresar</Boton>
            </div>
        </form>
    )
}

export default Login