import { roles } from '../../../models/Roles.js';
import { useState, useEffect } from 'react';
import Input from '../Input/Input.jsx';
import Boton from '../Boton/Boton.jsx';
import './FormularioEmergente.css';
import Select from '../Select/Select.jsx';

const FormularioEmergente = ({ onClose }) => {
  
  const [isVisible, setIsVisible] = useState(true);

  
  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) {
    return null;
  }

    return (
        <div>
            <div className="overlay" onClick={handleClose}></div>
            <div className="formulario-emergente">
                <div className='form-header flex'>
                    <div className='hd-title'>
                        Agregar nuevo usuario
                    </div>
                    <div className='hd-close'>
                        <Boton onClick={handleClose} style='close'>X</Boton>
                    </div>
                </div>
                <div className='form-body flex'>
                  <form className='form-client flex'>
                    <div className='co-form flex'>
                      <Input style='add-user' pos='add'>Cedula</Input>
                      <Input style='add-user' pos='add'>Nombre</Input>
                      <Input style='add-user' pos='add'>Apellido</Input>
                    </div>
                    <div className='co-form flex'>
                      <Input style='add-user' pos='add'>Celular</Input>
                      <Input style='add-user' pos='add'>Correo</Input>
                      <Input style='add-user' pos='add'>Direccion</Input>
                    </div>
                    <div className='co1-form flex'>
                      <p className='rols'>Rol:</p>
                      <Select data={roles}></Select>
                    </div>
                  </form>
                </div>
                <div className='form-footer flex'>
                    <Boton style='upload'>Agregar</Boton>
                </div>
            </div>
        </div>
    );
};

export default FormularioEmergente;