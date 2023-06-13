import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../components/forms/FormLogin/Login.jsx'
import Forget from '../../components/forms/forget/Forget.jsx'
import './Inicio.css'

const Inicio = ()=>{

    return(
        <div className='login-container'>
            <div className='logo'>
                <p className='logo-icon'>Logo</p>
            </div>
            <div className='form-container'>
                <div className='form-login'>
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