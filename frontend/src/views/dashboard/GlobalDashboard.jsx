import DsTableGlobal from "../../components/dsTable/dsTableGlobal.jsx"
import { Route, Routes } from "react-router-dom"

// se renderiza el dashboard de los casos a nivel global

const GlobalDashboard = ()=>{
    return(
        <Routes>
            <Route path="/principal" element={<DsTableGlobal></DsTableGlobal>}></Route>
        </Routes>
    )
}
export default GlobalDashboard