import UserPreferences from '../UserPreferenes/UserPreferences'
import SessionContext from '../../context/sesionContext'
import NavBar from '../../components/navBar/navBar'
import { UserData } from '../../services/DataUser'
import { Route, Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import AdminUsers from '../users/AdminUsers'
import Support from '../support/Support'
import Home from '../Home/Home'
import './panel.css'
import CreateCase from '../CreateCase/CreateCase'
import Case from '../Case/TecCase'

// en este modulo se muestra el dashboard de usuario

const Panel = ()=>{

    // nos traemos la informacion necesaria de la sesion

    const { login } = useContext(SessionContext);

    // antes de cargar la pagina se cargan los datos en la sesion del usuario

    useEffect(()=>{
        const fetchData = async () => {
            const usuario = localStorage.getItem('userName');
            const res = await UserData(usuario);
            login(res[0]);
        };
        fetchData();
    },[login])

    // esta vista contiene una barra de navegacion
    // así mismo contiene diversas rutas en la que el usuario podrá navegar
    // e interartuar con las mismas

    return(
        <div className='panel'>
            <div className='sticking'>
            <NavBar></NavBar>
            </div>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/support/*' element={<Support></Support>}></Route>
                <Route path='/preferences' element={<UserPreferences></UserPreferences>}></Route>
                <Route path='/users' element={<AdminUsers></AdminUsers>}></Route>
                <Route path='/NewCase' element={<CreateCase></CreateCase>}></Route>
                <Route path='/case/:id' element={<Case></Case>}></Route>
            </Routes>
        </div>
    )
}

export default Panel