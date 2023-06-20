
import { useState } from 'react'
import './Support.css'
import Boton from '../../components/forms/Boton/Boton'
import DsTableUser from '../../components/dsTable/dsTableUser'
import DsTableGlobal from '../../components/dsTable/dsTableGlobal'
const Support = ()=>{

    const [vista, setVista] = useState(true)

    const pes1 = vista? 'active':'disable'
    const pes2 = vista? 'disable':'active'

    function pes1A(){
        setVista(true)
    }
    function pes2A(){
        setVista(false)
    }

    const RenderDashboard = ()=>{
        if(vista){
            return(<DsTableUser></DsTableUser>)
        }else{
            return(<DsTableGlobal></DsTableGlobal>)
        }
    }

    return(
        <div className="support-container flex">
            <div className='cns'>
                <div className='flex boton'>
                    <Boton style={'pes '+ pes1} onClick={pes1A}>Vista personal</Boton>
                    <Boton style={'pes '+ pes2} onClick={pes2A}>Vista global</Boton>
                </div>
                <div className='dashboard'>
                    <RenderDashboard></RenderDashboard>
                </div>
            </div>
        </div>
    )
}

export default Support