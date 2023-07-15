import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'

// este componente renderiza los casos en espera

const ListWaitCase = (props)=>{

    // de acuerdo al tipo se renderizam los casos

    const { type } = props

    const CasosEsperaUs=[
        {id:7,titulo:'titulo7',fechaApertura:'1/1/2023',solicitante:'cliente7'},
        {id:8,titulo:'titulo8',fechaApertura:'1/1/2023',solicitante:'cliente8'},
        {id:9,titulo:'titulo9',fechaApertura:'1/1/2023',solicitante:'cliente9'}
    ]

    const CasosEsperaGl=[
        {id:7,titulo:'titulo7',fechaApertura:'1/1/2023',solicitante:'cliente7',tecnico:'tecnico7'},
        {id:8,titulo:'titulo8',fechaApertura:'1/1/2023',solicitante:'cliente8',tecnico:'tecnico8'},
        {id:9,titulo:'titulo9',fechaApertura:'1/1/2023',solicitante:'cliente9',tecnico:'tecnico9'}
    ]

    // se guarda el estado para hacer visible la tabla

    const [viewWait, setViewWait] = useState(true)

    // se cambia el estado de la vista

    function changeWait(){
        setViewWait(!viewWait)
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
                {CasosEsperaUs.map(caso => (
                    <tr>
                        <td>{caso.id}</td>
                        <td>{caso.titulo}</td>
                        <td>{caso.fechaApertura}</td>
                        <td>{caso.solicitante}</td>
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
                {CasosEsperaGl.map(caso => (
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
            <div className='title-wait grid'>
                <span className='text-table flex'>En espera</span>
                <span className='text-table flex inv'>
                    <Boton style='arrow' onClick={changeWait}><i className="bi bi-chevron-down"></i></Boton>
                </span>
            </div>
            <div className={ viewWait? 'visible' : 'oculta'}>
                <WhichTable></WhichTable>
            </div>
        </div>
    )
}

export default ListWaitCase