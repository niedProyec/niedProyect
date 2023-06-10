import { Route, Routes } from "react-router-dom"
import Login from "./views/login/Login"
import Forget from "./views/forget/Forget"


function App() {

  return (
    <Routes>
      <Route element={<Login></Login>} path="/"></Route>
      <Route element={<Forget></Forget>} path="/recuperar"></Route>
    </Routes>
  )
}

export default App
