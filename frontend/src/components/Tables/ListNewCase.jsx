import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'

const ListNewCase = (props)=>{

    const { type } = props

    const CasosNuevosUs=[
        {id:1,titulo:'titulo1',fechaApertura:'1/1/2023',solicitante:'cliente1'},
        {id:2,titulo:'titulo2',fechaApertura:'1/1/2023',solicitante:'cliente2'},
        {id:3,titulo:'titulo3',fechaApertura:'1/1/2023',solicitante:'cliente3'}
    ]

    const CasosNuevosGl=[
        {id:1,titulo:'titulo1',fechaApertura:'1/1/2023',solicitante:'cliente1',tecnico:'tecnico1'},
        {id:2,titulo:'titulo2',fechaApertura:'1/1/2023',solicitante:'cliente2',tecnico:'tecnico2'},
        {id:3,titulo:'titulo3',fechaApertura:'1/1/2023',solicitante:'cliente3',tecnico:'tecnico3'}
    ]

    const [viewNew, setViewNew] = useState(true)

    function changeNew(){
        setViewNew(!viewNew)
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
                {CasosNuevosUs.map(caso => (
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