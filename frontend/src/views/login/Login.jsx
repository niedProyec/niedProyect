import Input from '../../components/forms/Input/Input';
import { Link } from 'react-router-dom';
import './Login.css'
import Boton from '../../components/forms/Boton/Boton';

const Login = ()=>{
    return(
        <div className='login-container'>
            <div className='logo'>
                <p className='logo-icon'>Logo</p>
            </div>
            <div className='form-container'>
                <div className='form-login'>
                    <form>
                        <div class="cont separator">
                            <p className='title'>Inicie sesion</p>
                        </div>
                        <div class="distance">
                            <Input id='user' type='text' style="login">USUARIO:</Input>
                        </div>
                        <div class="distance">
                            <Input id='password' type='password' style="login">CONTRASEÑA:</Input>
                        </div>
                        <div class="recuperar">
                            <Link to="/recuperar" className='for-pass'>¿Olvidó su contraseña?</Link>
                        </div>
                        <div className='separator padd'>
                            <Input pos='reverse'type='checkbox' id='remember'>recuerdame</Input>
                        </div>
                        <div class="cont distance">
                            <Boton style='login'>Ingresar</Boton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login