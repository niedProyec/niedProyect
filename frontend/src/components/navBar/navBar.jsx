import { useState, useEffect, useRef, useContext } from 'react';
import SessionContext from '../../context/sesionContext';
import Boton from '../forms/Boton/Boton';
import { Link } from 'react-router-dom';
import './NavBar.css';

//la barra de navegacion se va a tener disponible dentro del panel

const NavBar = () => {

  // se traen los datos de la sesion 

  const { logout, user, rol } = useContext(SessionContext);

  // funcion para cerrar la sesion y borrar los datos referentes a la sesion

  const logOut = () => {
    logout()
    setTimeout(() => {
      localStorage.removeItem('userName');
    }, 500);
  };

  // se crea una variable para manejar el estado del menu de usuario, si es falso no se muestra y si
  // es verdadero se muestra en pantalla

  const [menuVisible, setMenuVisible] = useState(false);

  // se maneja la referencia menuref para mejorar el comportamiento en caso de que se haga click
  // en un lado de la pantalla diferente al menu
  const menuRef = useRef(null);

  // esta funcion se utiliza para cambiar el estado del menu

  const userMenu = () => {
    setMenuVisible(!menuVisible)
  };

  // cuando se haga click en una parte de la pantalla diferente al menu de usuario y
  // este se esté visualizando en la pantalla, entonces este se oculta

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          
          // en este caso para que no ocurra un error frente cuando se presione el boton nuevamente
          // se da un tiempo minimo de espera para que el estado cambie

          setTimeout(() => {
            setMenuVisible(false);
          }, 100);        
        }
    };

    if(menuVisible){
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  // la barra de navegacion se divide en tres partes
  // 1. logo
  // 2. menu de navegacion que dependiendo del tipo de usuario se muestran diferentes opciones
  // 3. rol del usuario, iniciales del nombre del usuario, y el menu de usuario que se maneja con un boton
  // para que pueda visualizarse en pantalla

  return (
    <div className="grid nav col-nav">
      <div className='center flex'>
        <h2 className='pro'>Logo</h2>
      </div>
      <div>
        <ul className='flex menu'>
          <li><Link to='/panel/home' className='btnopc'>inicio</Link></li>
          <li><Link to='/panel/support/user/principal' className='btnopc'>soporte</Link></li>
          <li>crear caso</li>
        </ul>
      </div>
      <div className='flex conf'>
        <h4 className='pro'>{rol}</h4>
        <div className='userconf flex center'>
          <h3 className='pro'>{user}</h3>
        </div>
        <Boton style='arrow' onClick={userMenu}>
          <i className="bi bi-chevron-down btnopc"></i>
        </Boton>
        {menuVisible && (
          <div ref={menuRef} id='opciones'>
            <Link to='/inicio/login' className='opcuser flex' onClick={logOut}>cerrar sesion</Link>
            <Link to='/panel/preferences' className='opcuser flex'>preferencias</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
