import SessionContext from '../../context/sesionContext.jsx'
import { useState, useEffect, useContext } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'
import { listNewTk } from '../../services/CaseServices.js'
import { Link } from 'react-router-dom';

// este componente renderiza los casos nuevos

const ListNewCase = (props)=>{
    
    // de acuerdo al tipo se renderizam los casos
    const { type } = props

    const { cedula } = useContext(SessionContext)

    const [CasosNuevosUs, setCasosNuevosUs] = useState()
    

    const CasosNuevosGl=[
        {id:1,titulo:'titulo1',fechaApertura:'1/1/2023',solicitante:'cliente1',tecnico:'tecnico1'},
        {id:2,titulo:'titulo2',fechaApertura:'1/1/2023',solicitante:'cliente2',tecnico:'tecnico2'},
        {id:3,titulo:'titulo3',fechaApertura:'1/1/2023',solicitante:'cliente3',tecnico:'tecnico3'}
    ]
 
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const list = async () => {        
        const data = await listNewTk(cedula);
        setCasosNuevosUs(data);
        setIsLoading(false); // Cambia a false después de cargar los datos
    };

    list();
}, [cedula]);


    // se guarda el estado para hacer visible la tabla

    const [viewNew, setViewNew] = useState(true)

    // se cambia el estado de la vista

    function changeNew(){
        setViewNew(!viewNew)
    }

    // dependiendo del tipo se renderiza la tabla respectiva

    const WhichTable = ()=>{
        
        if(type==='user') return(
            <table>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Fecha de apertura</th>
                    <th>Solicitante</th>
                </tr>
                {isLoading ? ( <tr>cargando datos...</tr>) :
                CasosNuevosUs.map(caso => (
                    <tr>
                        <td><Link to={`/panel/case/${caso.id}`}><b>{caso.id}</b></Link></td>
                        <td>{caso.titulo}</td>
                        <td>{new Date(caso.fecha).toLocaleDateString()}</td>
                        <td>{caso.usuario}</td>
                    </tr>
                ))}
            </table>
        )
        if(type==='global') return(
            <table>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Fecha de apertura</th>
                    <th>Solicitante</th>
                    <th>Tecnico</th>
                </tr>
                {CasosNuevosGl.map(caso => (
                    <tr>
                        <td>{caso.id}</td>
                        <td>{caso.titulo}</td>
                        <td>{caso.fechaApertura}</td>
                        <td>{caso.solicitante}</td>
                        <td>{caso.tecnico}</td>
                    </tr>
                ))}
            </table>
        )
    }

    // se retorna la tabla con los datos respectivos

    return(
        <div className='tableContainer'>
            <div className='title-new grid'>
                <span className='text-table flex'>Nuevo</span>
                <span className='text-table flex inv'>
                    <Boton style='arrow' onClick={changeNew}><i className="bi bi-chevron-down"></i></Boton>
                </span>
            </div>
            <div className={ viewNew? 'visible' : 'oculta'}>
                <WhichTable></WhichTable>
            </div>
        </div>
    )
}

export default ListNewCase