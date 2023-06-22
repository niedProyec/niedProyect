import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './tableStyle.css'

const ListWaitCase = (props)=>{
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

    const [viewWait, setViewWait] = useState(true)

    function changeWait(){
        setViewWait(!viewWait)
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