import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'

const ListProcessCase = (props)=>{
    const { type } = props

    const CasosProcesoUs=[
        {id:4,titulo:'titulo4',fechaApertura:'1/1/2023',solicitante:'cliente4'},
        {id:5,titulo:'titulo5',fechaApertura:'1/1/2023',solicitante:'cliente5'},
        {id:6,titulo:'titulo6',fechaApertura:'1/1/2023',solicitante:'cliente6'}
    ]

    const CasosProcesoGl=[
        {id:4,titulo:'titulo4',fechaApertura:'1/1/2023',solicitante:'cliente4',tecnico:'tecnico4'},
        {id:5,titulo:'titulo5',fechaApertura:'1/1/2023',solicitante:'cliente5',tecnico:'tecnico5'},
        {id:6,titulo:'titulo6',fechaApertura:'1/1/2023',solicitante:'cliente6',tecnico:'tecnico6'}
    ]

    const [viewProcess, setViewProcess] = useState(true)

    function changeProcess(){
        setViewProcess(!viewProcess)
    }

    const WhichTable = ()=>{
        if(type==='user') return(
            <table>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Fecha de apertura</th>
                    <th>Solicitante</th>
                </tr>
                {CasosProcesoUs.map(caso => (
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