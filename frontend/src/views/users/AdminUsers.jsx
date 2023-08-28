import FormularioEmergente from '../../components/forms/emergente/formEmergente.jsx'
import ListCliente from '../../components/Tables/ListCliente.jsx'
import Boton from '../../components/forms/Boton/Boton.jsx'
import ListTec from '../../components/Tables/ListTec.jsx'
import SessionContext from '../../context/sesionContext';
import { useEffect, useState, useContext } from 'react'
import './AdminUsers.css'

// este modulo permitira al los usuarios administradores administrar los usuarios del sistema

const AdminUsers = ()=>{

    const { rol } = useContext(SessionContext);

    
    const [rend, setRend] = useState(true)
    const [vista, setVista] = useState()

    useEffect(()=>{
        if(rol === "tecnico"){
            setRend(false)
            setVista(false)
        }else{
            setVista(true)
        }
    },[])

    const pes1 = vista? 'active':'disable'
    const pes2 = vista? 'disable':'active'

    function pes1A(){
        setVista(true)
    }

    function pes2A(){
        setVista(false)
    }

    const AddUser=()=>{
        if(vista){
            return (<Boton style='add' onClick={handleOpenForm}>Agregar usuario</Boton>)
        }else{
            return(<Boton style='add' onClick={handleOpenForm}>Agregar cliente</Boton>)
        }
    }

    const TableView=()=>{
        if(vista){
            return(<ListTec></ListTec>)
        }else{
            return(<ListCliente></ListCliente>)
        }
    }
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(true);
      };
    
      const handleCloseForm = () => {
        setShowForm(false);
      };
    

    return(
        <div className='user-container flex'>
            <div className='ds-users'>
                <div className='btn-opciones flex'>
                    {rend && <Boton style={'pes ' + pes1} onClick={pes1A}>Tecnicos</Boton>}
                    <Boton style={'pes ' + pes2} onClick={pes2A}>Clientes</Boton>
                </div>
                <div className='dashboard'>
                    <div className='boton-agregar flex'>
                        <AddUser></AddUser>
                    </div>
                    <TableView></TableView>
                    {showForm && <FormularioEmergente onClose={handleCloseForm} desForm={vista}/>}
                </div>
            </div>
        </div>
    )
}

export default AdminUsers