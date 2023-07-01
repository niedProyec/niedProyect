import { Navigate, Route, Routes } from "react-router-dom"
import { SessionProvider } from "./context/sesionContext"
import Inicio from "./views/inicio/Inicio"
import Panel from "./views/panel/panel"

{/**en este modulo se define la funcion principal que va a contener la pagina a renderizar */}

function App() {

  /** se definen una serie de rutas, la ruta principal es /inicio que contiene sub-rutas
   * luego se tiene la ruta /panel en la que se muestra todo el dashboard de cada usuario
   * y por ultimo se tiene la ruta de error que en caso de que una ruta no exista muestra esta ruta
   */

  return (
    <Routes>
        <Route path="/" element={<Navigate to="/inicio/login"/>}></Route>
        <Route element={<Inicio></Inicio>} path="/inicio/*"></Route>
        <Route path="/panel" element={<Navigate to="/panel/home"/>}></Route>
        <Route element={<SessionProvider><Panel></Panel></SessionProvider>} path="/panel/*"></Route>
        <Route path="/*" element={<p>error</p>}></Route>
    </Routes>
  )
}

export default App
