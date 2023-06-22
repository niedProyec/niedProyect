import { useState } from 'react'
import Boton from '../forms/Boton/Boton'
import './dsTable.css'
import ListNewCase from '../Tables/ListNewCase.jsx'
import ListProcessCase from '../Tables/ListProcessCase.jsx'
import ListWaitCase from '../Tables/ListWaitCase.jsx'
import ListFinishCase from '../Tables/ListFinishCase.jsx'
import ListGarantiaCase from '../Tables/ListGarantiaCase.jsx'

const DsTableGlobal = ()=>{

    return (
        <div className="dsContainer">
            <ListNewCase type='global'></ListNewCase>
            <ListProcessCase type='global'></ListProcessCase>
            <ListWaitCase type='global'></ListWaitCase>
            <ListFinishCase type='global'></ListFinishCase>
            <ListGarantiaCase type='global'></ListGarantiaCase>
            
            
            
        </div>
    )
}

export default DsTableGlobal