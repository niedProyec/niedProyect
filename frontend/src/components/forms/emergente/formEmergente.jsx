import { roles } from '../../../models/Roles.js';
import { useState, useEffect } from 'react';
import Input from '../Input/Input.jsx';
import Boton from '../Boton/Boton.jsx';
import './FormularioEmergente.css';
import Select from '../Select/Select.jsx';
import { AddUser } from '../../../services/AddUser.js';

const FormularioEmergente = ({ onClose, desForm}) => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState(roles.admin);
  
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

  async function agregar(){
    if(desForm){
      const res = await AddUser(cedula,nombre,apellido,celular,correo,direccion,rol,usuario,password);
      if(res){
        alert("cliente agregado")
      }
    }else{
      const res = await AddUser(cedula,nombre,apellido,celular,correo,direccion,3,usuario,password);
      if(res){
        alert("cliente agregado")
      }
    }
    handleClose()
  }

    return (
        <div>
            <div className="overlay" onClick={handleClose}></div>
            <div className="formulario-emergente">
                <div className='form-header flex'>
                    <div className='hd-title'>
                      {desForm? "Agregar usuario":"agregar cliente"}
                    </div>
                    <div className='hd-close'>
                        <Boton onClick={handleClose} style='close'>X</Boton>
                    </div>
                </div>
                <div className='form-body flex'>
                  <form className='form-client flex'>
                    <div className='co-form flex'>
                      <Input style='add-user' pos='add' onChange={(val)=>setCedula(val.target.value)}>Cedula</Input>
                      <Input style='add-user' pos='add' onChange={(val)=>setNombre(val.target.value)}>Nombre</Input>
                      <Input style='add-user' pos='add' onChange={(val)=>setCorreo(val.target.value)}>Correo</Input>
                      {desForm && <Input style='add-user' pos='add' onChange={(val)=>setUsuario(val.target.value)}>usuario</Input>}
                    </div>
                    <div className='co-form flex'>
                      <Input style='add-user' pos='add' onChange={(val)=>setCelular(val.target.value)}>Celular</Input>
                      {desForm && <Input style='add-user' pos='add' onChange={(val)=>setApellido(val.target.value)}>Apellido</Input>}
                      <Input style='add-user' pos='add' onChange={(val)=>setDireccion(val.target.value)}>Direccion</Input>
                      {desForm && <Input style='add-user' pos='add' type='password' onChange={(val)=>setPassword(val.target.value)}>Contraseña</Input>}
                    </div>
                    {desForm && <div className='co1-form flex'>
                      <p className='rols'>Rol:</p>
                      <Select style='bblue' data={roles} onChange={(val)=>setRol(val.target.value)}></Select>
                    </div>}
                  </form>
                </div>
                <div className='form-footer flex'>
                    <Boton style='upload' onClick={agregar}>Agregar</Boton>
                </div>
            </div>
        </div>
    );
};

export default FormularioEmergente;