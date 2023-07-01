import { Route, Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import SessionContext from '../../context/sesionContext'
import NavBar from '../../components/navBar/navBar'
import Home from '../Home/Home'
import Support from '../support/Support'
import './panel.css'
import { UserData } from '../../services/DataUser'

{/**en este modulo se muestra el dashboard de usuario */}

const Panel = ()=>{

    const { user, login, rol } = useContext(SessionContext);

    useEffect(()=>{
        const fetchData = async () => {
            const usuario = localStorage.getItem('userName');
            const res = await UserData(usuario);
            login(res[0]);
        };
        fetchData();
    },[login])

    /**esta vista contiene una barra de navegacion
     * así mismo contiene diversas rutas en la que el usuario podrá navegar
     * e interartuar con las mismas
     */

    return(
        <div className='panel'>
            <div className='sticking'>
            <NavBar user={user} rol={rol}></NavBar>
            </div>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/support/*' element={<Support></Support>}></Route>
            </Routes>
        </div>
    )
}

export default Panel