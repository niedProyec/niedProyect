import { Navigate, Route, Routes } from "react-router-dom"
import { SessionProvider } from "./context/sesionContext"
import Inicio from "./views/inicio/Inicio"
import Panel from "./views/panel/panel"
import UserAuth from "./views/UserAuth/UserAuth"
import UserCase from "./views/Case/UserCase"

{/**en este modulo se define la funcion principal que va a contener la pagina a renderizar */}

function App() {

  /** se definen una serie de rutas, la ruta principal es /inicio que contiene sub-rutas
   * luego se tiene la ruta /panel en la que se muestra todo el dashboard de cada usuario
   * y por ultimo se tiene la ruta de error que en caso de que una ruta no exista muestra esta ruta
   */

  return (
    <Routes>
        <Route path="/" element={<Navigate to="/inicio/login"/>}></Route>
        <Route path="/inicio/*" element={<Inicio></Inicio>}></Route>
        <Route path="/panel" element={<Navigate to="/panel/home"/>}></Route>
        <Route path="/panel/*" element={<SessionProvider><Panel></Panel></SessionProvider>}></Route>
        <Route path="/authUser" element={<UserAuth></UserAuth>}></Route>
        <Route path="/case/:id" element={<UserCase></UserCase>}></Route>
        <Route path="/*" element={<p>error</p>}></Route>
    </Routes>
  )
}

export default App
