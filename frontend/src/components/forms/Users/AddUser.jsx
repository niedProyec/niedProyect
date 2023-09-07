import { roles } from "../../../models/Roles.js";
import Input from "../Input/Input.jsx";
import Select from "../Select/Select.jsx";
import { AddUser } from "../../../services/AddUser.js";
import { useState } from "react";
import Boton from "../Boton/Boton.jsx";


const Add_user=({desForm, handleClose})=>{

    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [usuario, setUsuario] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState(roles.admin);

    async function agregar(){
        if(cedula === '' || nombre === '' || apellido === '' || celular === '' || correo === '' || direccion === ''){
            alert("no has completado todos los datos")
        }else{
            if(desForm==='tecnico'){
                if(usuario ==='' ||password === ''){
                    alert("credenciales no definidas")
                }else{
                    const res = await AddUser(cedula,nombre,apellido,celular,correo,direccion,rol,usuario,password);
                    if(res){
                        alert("tecnico agregado")
                    }
                }
            }else{
                const res = await AddUser(cedula,nombre,apellido,celular,correo,direccion,3,usuario,password);
                if(res){
                    alert("cliente agregado")
                }
            }
            handleClose()
        }
    }

    return(
        <div className="formulario-emergente">
            <div className='form-header flex'>
                <div className='hd-title'>
                    {desForm==='tecnico' && "Agregar usuario"}
                    {desForm==='tecnico' && "Agregar cliente"}
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
                        {desForm==='tecnico' && <Input style='add-user' pos='add' onChange={(val)=>setUsuario(val.target.value)}>usuario</Input>}
                    </div>
                    <div className='co-form flex'>
                        <Input style='add-user' pos='add' onChange={(val)=>setCelular(val.target.value)}>Celular</Input>
                        {desForm==='tecnico' && <Input style='add-user' pos='add' onChange={(val)=>setApellido(val.target.value)}>Apellido</Input>}
                        <Input style='add-user' pos='add' onChange={(val)=>setDireccion(val.target.value)}>Direccion</Input>
                        {desForm==='tecnico' && <Input style='add-user' pos='add' type='password' onChange={(val)=>setPassword(val.target.value)}>Contraseña</Input>}
                    </div>
                    {desForm==='tecnico' && <div className='co1-form flex'>
                        <p className='rols'>Rol:</p>
                        <Select style='bblue' data={roles} onChange={(val)=>setRol(val.target.value)}></Select>
                    </div>}
                </form>
            </div>
            <div className='form-footer flex'>
                <Boton style='upload' onClick={agregar}>Agregar</Boton>
            </div>
        </div>
    )
}

export default Add_user;