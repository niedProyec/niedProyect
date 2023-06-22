import './dsTable.css'
import ListNewCase from '../Tables/ListNewCase.jsx'
import ListProcessCase from '../Tables/ListProcessCase.jsx'
import ListWaitCase from '../Tables/ListWaitCase.jsx'
import ListFinishCase from '../Tables/ListFinishCase.jsx'
import ListGarantiaCase from '../Tables/ListGarantiaCase.jsx'

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