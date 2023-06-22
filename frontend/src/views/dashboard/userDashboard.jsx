import { Route, Routes } from "react-router-dom"
import DsTableUser from "../../components/dsTable/dsTableUser"

const UserDashboard = ()=>{
    return(
        <Routes>
            <Route path="/principal" element={<DsTableUser></DsTableUser>}></Route>
        </Routes>
    )
}
export default UserDashboard