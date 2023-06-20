import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './dsTable.css'

const DsTableUser = ()=>{

    const CasosNuevos=[
        {id:1,titulo:'titulo1',fechaApertura:'1/1/2023',solicitante:'cliente1'},
        {id:2,titulo:'titulo2',fechaApertura:'1/1/2023',solicitante:'cliente2'},
        {id:3,titulo:'titulo3',fechaApertura:'1/1/2023',solicitante:'cliente3'}
    ]

    const CasosProceso=[
        {id:4,titulo:'titulo4',fechaApertura:'1/1/2023',solicitante:'cliente4'},
        {id:5,titulo:'titulo5',fechaApertura:'1/1/2023',solicitante:'cliente5'},
        {id:6,titulo:'titulo6',fechaApertura:'1/1/2023',solicitante:'cliente6'}
    ]

    const CasosEspera=[
        {id:7,titulo:'titulo7',fechaApertura:'1/1/2023',solicitante:'cliente7'},
        {id:8,titulo:'titulo8',fechaApertura:'1/1/2023',solicitante:'cliente8'},
        {id:9,titulo:'titulo9',fechaApertura:'1/1/2023',solicitante:'cliente9'}
    ]

    const CasosResuelto=[
        {id:10,titulo:'titulo10',fechaApertura:'1/1/2023',solicitante:'cliente10'},
        {id:11,titulo:'titulo11',fechaApertura:'1/1/2023',solicitante:'cliente11'},
        {id:12,titulo:'titulo12',fechaApertura:'1/1/2023',solicitante:'cliente12'}
    ]

    const CasosGarantia=[
        {id:13,titulo:'titulo13',fechaApertura:'1/1/2023',solicitante:'cliente13', tiempo:'30 dias'},
        {id:14,titulo:'titulo14',fechaApertura:'1/1/2023',solicitante:'cliente14', tiempo:'30 dias'},
        {id:15,titulo:'titulo15',fechaApertura:'1/1/2023',solicitante:'cliente15', tiempo:'30 dias'}
    ]

    const [viewNew, setViewNew] = useState(false)
    const [viewProcess, setViewProcess] = useState(false)
    const [viewWait, setViewWait] = useState(false)
    const [viewFinish, setViewFinish] = useState(false)
    const [viewGarantia, setViewGarantia] = useState(false)

    function changeNew(){
        setViewNew(!viewNew)
    }

    function changeProcess(){
        setViewProcess(!viewProcess)
    }

    function changeWait(){
        setViewWait(!viewWait)
    }

    function changeFinish(){
        setViewFinish(!viewFinish)
    }

    function changeGarantia(){
        setViewGarantia(!viewGarantia)
    }

    return (
        <div className="dsContainer">
            <div className='tableContainer'>
                <div className='title-new grid'>
                    <span className='text-table flex'>Nuevo</span>
                    <span className='text-table flex inv'>
                        <Boton style='arrow' onClick={changeNew}><i className="bi bi-chevron-down"></i></Boton>
                    </span>
                </div>
                <div className={ viewNew? 'visible' : 'oculta'}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Fecha de apertura</th>
                            <th>Solicitante</th>
                        </tr>
                        {CasosNuevos.map(caso => (
                            <tr>
                                <td>{caso.id}</td>
                                <td>{caso.titulo}</td>
                                <td>{caso.fechaApertura}</td>
                                <td>{caso.solicitante}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className='tableContainer'>
                <div className='title-process grid'>
                    <span className='text-table flex'>En proceso</span>
                    <span className='text-table flex inv'>
                        <Boton style='arrow' onClick={changeProcess}><i className="bi bi-chevron-down"></i></Boton>
                    </span>
                </div>
                <div className={ viewProcess? 'visible' : 'oculta'}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Fecha de apertura</th>
                            <th>Solicitante</th>
                        </tr>
                        {CasosProceso.map(caso => (
                            <tr>
                                <td>{caso.id}</td>
                                <td>{caso.titulo}</td>
                                <td>{caso.fechaApertura}</td>
                                <td>{caso.solicitante}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className='tableContainer'>
                <div className='title-wait grid'>
                    <span className='text-table flex'>En espera</span>
                    <span className='text-table flex inv'>
                        <Boton style='arrow' onClick={changeWait}><i className="bi bi-chevron-down"></i></Boton>
                    </span>
                </div>
                <div className={ viewWait? 'visible' : 'oculta'}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Fecha de apertura</th>
                            <th>Solicitante</th>
                        </tr>
                        {CasosEspera.map(caso => (
                            <tr>
                                <td>{caso.id}</td>
                                <td>{caso.titulo}</td>
                                <td>{caso.fechaApertura}</td>
                                <td>{caso.solicitante}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className='tableContainer'>
                <div className='title-finish grid'>
                    <span className='text-table flex'>Resueltas</span>
                    <span className='text-table flex inv'>
                        <Boton style='arrow' onClick={changeFinish}><i className="bi bi-chevron-down"></i></Boton>
                    </span>
                </div>
                <div className={ viewFinish? 'visible' : 'oculta'}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Fecha de apertura</th>
                            <th>Solicitante</th>
                        </tr>
                        {CasosResuelto.map(caso => (
                            <tr>
                                <td>{caso.id}</td>
                                <td>{caso.titulo}</td>
                                <td>{caso.fechaApertura}</td>
                                <td>{caso.solicitante}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className='tableContainer'>
                <div className='title-garantia grid'>
                    <span className='text-table flex'>Garantia</span>
                    <span className='text-table flex inv'>
                        <Boton style='arrow' onClick={changeGarantia}><i className="bi bi-chevron-down"></i></Boton>
                    </span>
                </div>
                <div className={ viewGarantia? 'visible' : 'oculta'}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Fecha de apertura</th>
                            <th>Solicitante</th>
                            <th>tiempo</th>
                        </tr>
                        {CasosGarantia.map(caso => (
                            <tr>
                                <td>{caso.id}</td>
                                <td>{caso.titulo}</td>
                                <td>{caso.fechaApertura}</td>
                                <td>{caso.solicitante}</td>
                                <td>{caso.tiempo}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default DsTableUser