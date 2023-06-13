import { Navigate, Route, Routes } from "react-router-dom"
import Inicio from "./views/inicio/Inicio"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigate to="/inicio"></Navigate>}></Route>
        <Route element={<Inicio></Inicio>} path="/inicio/*"></Route>
        <Route element={<p>panel</p>} path="/panel"></Route>
        <Route path="/*" element={<p>error</p>}></Route>
    </Routes>
  )
}

export default App
