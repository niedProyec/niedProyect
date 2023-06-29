import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'
import './panel.css'
import Home from '../Home/Home'
import Support from '../support/Support'

{/**en este modulo se muestra el dashboard de usuario */}

const Panel = ()=>{

    const location = useLocation();
    const user = location.state.slice(0,2);

    /**esta vista contiene una barra de navegacion
     * así mismo contiene diversas rutas en la que el usuario podrá navegar
     * e interartuar con las mismas
     */

    return(
        <div className='panel'>
            <div className='sticking'>
            <NavBar user={user}></NavBar>
            </div>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/support/*' element={<Support></Support>}></Route>
            </Routes>
        </div>
    )
}

export default Panel