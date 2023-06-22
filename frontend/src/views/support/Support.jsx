
import { useState } from 'react'
import './Support.css'
import Boton from '../../components/forms/Boton/Boton'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import UserDashboard from '../dashboard/userDashboard'
import GlobalDashboard from '../dashboard/GlobalDashboard'
const Support = (props)=>{

    const Navigate = useNavigate()
    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    const [vista, setVista] = useState(true)

    const pes1 = vista? 'active':'disable'
    const pes2 = vista? 'disable':'active'

    function pes1A(){
        Navigate('/panel/support/user/'+pathSegments[pathSegments.length-1])
        setVista(true)
    }
    function pes2A(){
        Navigate('/panel/support/global/'+pathSegments[pathSegments.length-1])
        setVista(false)
    }

    useState(() => {
        if (location.pathname === '/panel/support/user/principal') setVista(true);
        if (location.pathname === '/panel/support/global/principal') setVista(false);
      }, [location]);

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