import { useState, useEffect, useContext } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'
import SessionContext from '../../context/sesionContext.jsx'
import { listProcTk } from '../../services/CaseServices'
import { Link } from 'react-router-dom';


// este componente renderiza los casos en proceso

const ListProcessCase = (props)=>{

    // de acuerdo al tipo se renderizam los casos

    const { type } = props

    const { cedula } = useContext(SessionContext);
    const [isLoading, setIsLoading] = useState(true);

    const CasosProcesoGl=[
        {id:4,titulo:'titulo4',fechaApertura:'1/1/2023',solicitante:'cliente4',tecnico:'tecnico4'},
        {id:5,titulo:'titulo5',fechaApertura:'1/1/2023',solicitante:'cliente5',tecnico:'tecnico5'},
        {id:6,titulo:'titulo6',fechaApertura:'1/1/2023',solicitante:'cliente6',tecnico:'tecnico6'}
    ]

    // se guarda el estado para hacer visible la tabla

    const [viewProcess, setViewProcess] = useState(true);
    const [CasosProcUs, setCasosProcUs] = useState();

    // se cambia el estado de la vista

    function changeProcess(){
        setViewProcess(!viewProcess)
    }

    useEffect(() => {
        const list = async () => {        
            const data = await listProcTk(cedula);
            setCasosProcUs(data);
            setIsLoading(false); // Cambia a false después de cargar los datos
        };
    
        list();
    }, [cedula]);

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
                CasosProcUs.map(caso => (
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
                {CasosProcesoGl.map(caso => (
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
            <div className='title-process grid'>
                <span className='text-table flex'>En proceso</span>
                <span className='text-table flex inv'>
                    <Boton style='arrow' onClick={changeProcess}><i className="bi bi-chevron-down"></i></Boton>
                </span>
            </div>
            <div className={ viewProcess? 'visible' : 'oculta'}>
                <WhichTable></WhichTable>
            </div>
        </div>
    )
}

export default ListProcessCase