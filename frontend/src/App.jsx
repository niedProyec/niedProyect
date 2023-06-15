import { Navigate, Route, Routes } from "react-router-dom"
import Inicio from "./views/inicio/Inicio"
import Panel from "./views/panel/panel"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigate to="/inicio"></Navigate>}></Route>
        <Route element={<Inicio></Inicio>} path="/inicio/*"></Route>
        <Route element={<Panel></Panel>} path="/panel/*"></Route>
        <Route path="/*" element={<p>error</p>}></Route>
    </Routes>
  )
}

export default App
