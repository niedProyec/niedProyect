import FormularioEmergente from '../../components/forms/emergente/formEmergente.jsx';
import ListCliente from '../../components/Tables/ListCliente.jsx';
import Boton from '../../components/forms/Boton/Boton.jsx';
import ListTec from '../../components/Tables/ListTec.jsx';
import SessionContext from '../../context/sesionContext';
import { useEffect, useState, useContext } from 'react';
import './AdminUsers.css';

// este modulo permitira al los usuarios administradores gestionar los usuarios del sistema

const AdminUsers = ()=>{

    // Se trae el rol del usuario logeado
    const { rol } = useContext(SessionContext);

    // Esta constante define si una parte es visible de acuerdo al rol
    const [rend, setRend] = useState(true);

    // Con esta se tiene en cuenta que vista se va a renderizar
    const [vista, setVista] = useState();

    // Constante para mostrar un formulario
    const [showForm, setShowForm] = useState(false);

    const [form, setForm] = useState('');

    /* Antes de que cargue la página se revisa que rol tiene el usuario y se preocede a colocar los 
    estados respectivos*/
    useEffect(()=>{
        if(rol === "tecnico"){
            setRend(false);
            setVista(false);
            setForm('cliente')
        }else{
            setVista(true);
            setForm('tecnico')
        }
    },[])


    // Se defienen dos constantes que de acuerdo al estado de la vista se almacena un estilo definido
    const pes1 = vista? 'active':'disable';
    const pes2 = vista? 'disable':'active';

    // Cuando se llame la función se muestra la pestaña 1
    function pes1A(){
        setVista(true);
        setForm('tecnico');
    }

    // Cuando se llame la función se muestra la pestaña 2
    function pes2A(){
        setVista(false);
        setForm('cliente');
    }

    // De acuerdo a la vista se renderiza el boton respectivo
    const AddUser=()=>{
        if(vista){
            return (<Boton style='add' onClick={handleOpenForm}>Agregar usuario</Boton>);
        }else{
            return(<Boton style='add' onClick={handleOpenForm}>Agregar cliente</Boton>);
        }
    }

    // De acuerdo a la vista se renderiza la tabla correspondiente
    const TableView=()=>{
        if(vista){
            return(<ListTec></ListTec>);
        }else{
            return(<ListCliente></ListCliente>);
        }
    }
    
    // Estas dos funciones son para abrir y cerrar el formulario que se despliega
    const handleOpenForm = () => {
        setShowForm(true);
    };
    
    const handleCloseForm = () => {
        setShowForm(false);
    };
    
    // se retorna el componente
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
                    {showForm && <FormularioEmergente onClose={handleCloseForm} desForm={form}/>}
                </div>
            </div>
        </div>
    );
}

export default AdminUsers;