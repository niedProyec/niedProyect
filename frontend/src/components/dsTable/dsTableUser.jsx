import ListGarantiaCase from '../Tables/ListGarantiaCase.jsx'
import ListProcessCase from '../Tables/ListProcessCase.jsx'
import ListFinishCase from '../Tables/ListFinishCase.jsx'
import ListWaitCase from '../Tables/ListWaitCase.jsx'
import ListNewCase from '../Tables/ListNewCase.jsx'
import './dsTable.css'

//esta funcion trae una a una las tablas con los casos de acuerdo al usuario

const DsTableUser = ()=>{
    
    return (
        <div className="dsContainer">
            <ListNewCase type='user'></ListNewCase>
            <ListProcessCase type='user'></ListProcessCase>
            <ListWaitCase type='user'></ListWaitCase>
            <ListFinishCase type='user'></ListFinishCase>
            <ListGarantiaCase type='user'></ListGarantiaCase>
        </div>
    )
}

export default DsTableUser