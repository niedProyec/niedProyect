import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'
import './panel.css'
import Home from '../Home/Home'

{/**en este modulo se muestra el dashboard de usuario */}

const Panel = ()=>{

    /**esta vista contiene una barra de navegacion
     * así mismo contiene diversas rutas en la que el usuario podrá navegar
     * e interartuar con las mismas
     */

    return(
        <div className='panel'>
            <div className='sticking'>
            <NavBar></NavBar>
            </div>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
            </Routes>
        </div>
    )
}

export default Panel