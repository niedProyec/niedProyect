import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'

const ListFinishCase = (props)=>{
    const { type } = props

    const CasosResueltoUs=[
        {id:10,titulo:'titulo10',fechaApertura:'1/1/2023',solicitante:'cliente10'},
        {id:11,titulo:'titulo11',fechaApertura:'1/1/2023',solicitante:'cliente11'},
        {id:12,titulo:'titulo12',fechaApertura:'1/1/2023',solicitante:'cliente12'}
    ]

    const CasosResueltoGl=[
        {id:10,titulo:'titulo10',fechaApertura:'1/1/2023',solicitante:'cliente10',tecnico:'tecnico10'},
        {id:11,titulo:'titulo11',fechaApertura:'1/1/2023',solicitante:'cliente11',tecnico:'tecnico11'},
        {id:12,titulo:'titulo12',fechaApertura:'1/1/2023',solicitante:'cliente12',tecnico:'tecnico12'}
    ]

    const [viewFinish, setViewFinish] = useState(true)

    function changeFinish(){
        setViewFinish(!viewFinish)
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
                {CasosResueltoUs.map(caso => (
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
                {CasosResueltoGl.map(caso => (
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

    return (
        <div className='tableContainer'>
                <div className='title-finish grid'>
                    <span className='text-table flex'>Resueltas</span>
                    <span className='text-table flex inv'>
                        <Boton style='arrow' onClick={changeFinish}><i className="bi bi-chevron-down"></i></Boton>
                    </span>
                </div>
                <div className={ viewFinish? 'visible' : 'oculta'}>
                    <WhichTable></WhichTable>
                </div>
            </div>
    )
}

export default ListFinishCase