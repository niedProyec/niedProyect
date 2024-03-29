import Boton from '../../components/forms/Boton/Boton'
import { Link } from 'react-router-dom'
import './Home.css'

// este modulo renderiza el dashboard principal del panel

const Home = ()=>{

    // este sistema contiene dos modulos
    // 1. muestra todos los datos correspondientes al usuario que inicia sesion
    // 2. muestra todos los datos a nivvel global que se han estado almacenando

    return(
        <div className="grid col-vi Home">
            <div className="visualization flex vsUser center">
                <div className='vis-container'>
                    <div className="grid col-tk principalPanel">
                        <div className='flex titlePrincipal'>
                            <p><i className="bi bi-exclamation-circle"></i> <Link to='/panel/support/user/principal'className='txtl'>Tickets</Link></p>
                        </div>
                        <div className='flex btnCreate'>
                            <Boton style='create'>Nuevo caso</Boton>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill cg"></i> nuevo</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle cg"></i> en proceso</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill cy"></i> en espera</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle"></i> resueltas</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill cn"></i> garantia</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill"></i> cerrado</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visualization flex vsGlobal center">
                <div className='vis-container'>
                    <div className="flex principalPanel">
                        <div className='flex titlePrincipal'>
                        <Link to='/panel/support/global/principal'className='txtl'>Global</Link>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill cg"></i> nuevo</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle cg"></i> en proceso</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill cy"></i> en espera</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle"></i> resueltas</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill cn"></i> garantia</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                    <div className="grid col-tk rowsOpc">
                        <div className='text flex'>
                            <p><i className="bi bi-circle-fill"></i> cerrado</p>
                        </div>
                        <div className='number flex'>
                            <p className='nbContainer flex center'>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home