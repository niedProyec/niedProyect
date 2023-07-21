import ListCliente from '../../components/Tables/ListCliente.jsx'
import Boton from '../../components/forms/Boton/Boton.jsx'
import ListTec from '../../components/Tables/ListTec.jsx'
import { useState } from 'react'
import './AdminUsers.css'
import FormularioEmergente from '../../components/forms/emergente/formEmergente.jsx'

// este modulo permitira al los usuarios administradores administrar los usuarios del sistema

const AdminUsers = ()=>{

    const [vista, setVista] = useState(true)

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
            return(<Boton style='add'>Agregar cliente</Boton>)
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
                    <Boton style={'pes ' + pes1} onClick={pes1A}>Tecnicos</Boton>
                    <Boton style={'pes ' + pes2} onClick={pes2A}>Clientes</Boton>
                </div>
                <div className='dashboard'>
                    <div className='boton-agregar flex'>
                        <AddUser></AddUser>
                    </div>
                    <TableView></TableView>
                    {showForm && <FormularioEmergente onClose={handleCloseForm} />}
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                </div>
            </div>
        </div>
    )
}

export default AdminUsers