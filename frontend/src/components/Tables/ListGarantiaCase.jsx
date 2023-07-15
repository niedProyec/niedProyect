import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'

// este componente renderiza los casos en garantia

const ListGarantiaCase = (props)=>{

    // de acuerdo al tipo se renderizam los casos

    const { type } = props

    const CasosGarantiaUs=[
        {id:13,titulo:'titulo13',fechaApertura:'1/1/2023',solicitante:'cliente13', tiempo:'30 dias'},
        {id:14,titulo:'titulo14',fechaApertura:'1/1/2023',solicitante:'cliente14', tiempo:'30 dias'},
        {id:15,titulo:'titulo15',fechaApertura:'1/1/2023',solicitante:'cliente15', tiempo:'30 dias'}
    ]

    const CasosGarantiaGl=[
        {id:13,titulo:'titulo13',fechaApertura:'1/1/2023',solicitante:'cliente13', tiempo:'30 dias',tecnico:'tecnico13'},
        {id:14,titulo:'titulo14',fechaApertura:'1/1/2023',solicitante:'cliente14', tiempo:'30 dias',tecnico:'tecnico14'},
        {id:15,titulo:'titulo15',fechaApertura:'1/1/2023',solicitante:'cliente15', tiempo:'30 dias',tecnico:'tecnico15'}
    ]

    // se guarda el estado para hacer visible la tabla

    const [viewGarantia, setViewGarantia] = useState(true)

    // se cambia el estado de la vista

    function changeGarantia(){
        setViewGarantia(!viewGarantia)
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
                    <th>Tiempo</th>
                </tr>
                {CasosGarantiaUs.map(caso => (
                    <tr>
                        <td>{caso.id}</td>
                        <td>{caso.titulo}</td>
                        <td>{caso.fechaApertura}</td>
                        <td>{caso.solicitante}</td>
                        <td>{caso.tiempo}</td>
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
                    <th>Tiempo</th>
                </tr>
                {CasosGarantiaGl.map(caso => (
                    <tr>
                        <td>{caso.id}</td>
                        <td>{caso.titulo}</td>
                        <td>{caso.fechaApertura}</td>
                        <td>{caso.solicitante}</td>
                        <td>{caso.tecnico}</td>
                        <td>{caso.tiempo}</td>
                    </tr>
                ))}
            </table>
        )
    }

    // se retorna la tabla con los datos respectivos

    return(
        <div className='tableContainer'>
            <div className='title-garantia grid'>
                <span className='text-table flex'>Garantia</span>
                <span className='text-table flex inv'>
                    <Boton style='arrow' onClick={changeGarantia}><i className="bi bi-chevron-down"></i></Boton>
                </span>
            </div>
            <div className={ viewGarantia? 'visible' : 'oculta'}>
                <WhichTable></WhichTable>
            </div>
        </div>
    )
}

export default ListGarantiaCase