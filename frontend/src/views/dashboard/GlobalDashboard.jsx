import { Route, Routes } from "react-router-dom"
import DsTableGlobal from "../../components/dsTable/dsTableGlobal.jsx"

const GlobalDashboard = ()=>{
    return(
        <Routes>
            <Route path="/principal" element={<DsTableGlobal></DsTableGlobal>}></Route>
        </Routes>
    )
}
export default GlobalDashboard