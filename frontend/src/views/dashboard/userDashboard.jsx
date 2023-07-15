import DsTableUser from "../../components/dsTable/dsTableUser"
import { Route, Routes } from "react-router-dom"

// renderiza el dashboard de los casos a nivel del tecnico

const UserDashboard = ()=>{
    return(
        <Routes>
            <Route path="/principal" element={<DsTableUser></DsTableUser>}></Route>
        </Routes>
    )
}
export default UserDashboard