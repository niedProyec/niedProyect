import ListGarantiaCase from '../Tables/ListGarantiaCase.jsx'
import ListProcessCase from '../Tables/ListProcessCase.jsx'
import ListFinishCase from '../Tables/ListFinishCase.jsx'
import ListWaitCase from '../Tables/ListWaitCase.jsx'
import ListNewCase from '../Tables/ListNewCase.jsx'
import './dsTable.css'

//esta fucion nos trae una a una las tablas con los casos a nivel global

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