
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import GlobalDashboard from '../dashboard/GlobalDashboard'
import UserDashboard from '../dashboard/userDashboard'
import Boton from '../../components/forms/Boton/Boton'
import { useState } from 'react'
import './Support.css'

// este modulo renderiza los dashboard de los casos tanto global como por parte del usuario

const Support = ()=>{

    // se utiliza una constante de navegacion para navegar entre diferentes vistas

    const Navigate = useNavigate();

    // se utiliza una constante location para identificar la ruta en la que esta el programa

    const location = useLocation();

    // se almacena un array con las rutas de la pagina actual

    const pathSegments = location.pathname.split('/');

    // con esta vista se tiene en cuenta para renderizar los dashboards

    const [vista, setVista] = useState(true)

    // de acuerdo a la vista, se cargan los datos requeridos para renderizar los dashboard

    const pes1 = vista? 'active':'disable'
    const pes2 = vista? 'disable':'active'

    // dependiendo el ultimo segmento de la url se direcciona al dashboard correspondiente
    // tanto en el usuario como el global

    function pes1A(){
        Navigate('/panel/support/user/'+pathSegments[pathSegments.length-1])
        setVista(true)
    }
    function pes2A(){
        Navigate('/panel/support/global/'+pathSegments[pathSegments.length-1])
        setVista(false)
    }

    // dependiendo de cual sea la locacion se renderiza los componentes correspondientes

    useState(() => {
        if (location.pathname === '/panel/support/user/principal') setVista(true);
        if (location.pathname === '/panel/support/global/principal') setVista(false);
      }, [location]);

    // se retorna el dasboard

    return(
        <div className="support-container flex">
            <div className='cns'>
                <div className='flex boton'>
                    <Boton style={'pes '+ pes1} onClick={pes1A}>Vista personal</Boton>
                    <Boton style={'pes '+ pes2} onClick={pes2A}>Vista global</Boton>
                </div>
                <div className='dashboard'>
                    <Routes>
                        <Route path='/user/*' element={<UserDashboard></UserDashboard>}></Route>
                        <Route path='/global/*' element={<GlobalDashboard></GlobalDashboard>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Support