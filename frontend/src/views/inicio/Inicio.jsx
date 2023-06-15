import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../components/forms/FormLogin/Login.jsx'
import Forget from '../../components/forms/forget/Forget.jsx'
import './Inicio.css'

{/**este modulo es la página principal de la app en este se realiza el sistema de login */}

const Inicio = ()=>{

    /**
     * esta pagina muestra diferentes rutas
     * /login es el sistema de login
     * /forget en caso de que al usuario se le olvide la contraseña se accede a dicha ruta
     */

    return(
        <div className='login-container'>
            <div className='logo flex'>
                <p className='logo-icon'>Logo</p>
            </div>
            <div className='form-container flex'>
                <div className='form-login flex'>
                    <Routes>
                        <Route path='/' element={<Navigate to='/inicio/login'></Navigate>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route element={<Forget></Forget>} path="/forget"></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Inicio