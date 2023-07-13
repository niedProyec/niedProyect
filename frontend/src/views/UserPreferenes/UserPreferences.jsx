import { useContext, useEffect, useState } from 'react'
import SessionContext from '../../context/sesionContext'
import Boton from '../../components/forms/Boton/Boton'
import Input from '../../components/forms/Input/Input'
import './UserPreferences.css'
import { PassUpdate } from '../../services/PassUpdate'
import { UserData } from '../../services/DataUser'
import { UpdateUserData } from '../../services/updateData'

const UserPreferences = ()=>{

    const { user, userName, rol, name, lastName, cel, correo, login} = useContext(SessionContext)

    const [vista, setVista] = useState(true)
    const [roles, setRoles] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [password, setPassword] = useState("")
    const [celular, setCelular] = useState("")
    const [correou, setCorreoU] = useState("")

    useEffect(()=>{
        setTimeout(()=>{
            setRoles(rol)
            setNombre(name)
            setApellido(lastName)
            setCelular(cel)
            setCorreoU(correo)
        },100);
    },[])

    const pes1 = vista? 'active':'disable'

    function changeView(){
        setVista(true)
    }

    async function updateI(evento) {
        evento.preventDefault()
        if (password) {
            const resPass = await PassUpdate(userName, password)
            if (resPass) {
                alert('Contraseña actualizada')
                setPassword('')
            }
        }
        const resData = await UpdateUserData(nombre, apellido, celular, userName)
        if (resData) {
            const data = await UserData(userName)
            login(data[0])
        }
      }
      
    return(
        <div className="flex userp">
            <div className='usp'>
                <div className='pes-btn'>
                    <Boton style={'pes '+pes1} onClick={changeView}>Principal</Boton>
                </div>
                <div className='preferences flex'>
                    <div className='userInitials flex'>
                        <div className='userI flex center'>
                            <p className='userText'>{user}</p>
                        </div>
                    </div>
                    <div className='userData'>    
                        <p><b>Usuario:</b> {userName}</p>
                        <form className='dataCont' onSubmit={(evento)=>updateI(evento)}>
                            <div className='flex'>
                                <div className='formCol flex'>
                                    <Input value={ nombre } style='preferences' pos='pre' onChange={(val)=>setNombre(val.target.value)}>Nombre(s):</Input>
                                    <Input style='preferences' pos='pre' value={ password }onChange={(val)=>setPassword(val.target.value)} type="password">Contraseña:</Input>
                                    <Input style='preferences' pos='pre' value={correou} disabled={true}>Correo:</Input>
                                </div>
                                <div className='formCol flex '>
                                    <Input style='preferences' pos='pre' value={apellido} onChange={(val)=>setApellido(val.target.value)}>Apellido(s):</Input>
                                    <Input style='preferences' pos='pre' value={celular} onChange={(val)=>setCelular(val.target.value)}>Celular:</Input>
                                    <Input style='preferences' pos='pre' value={roles} disabled={true}>Rol:</Input>
                                </div>
                            </div>
                            <div className='flex center pad'>
                                <Boton style='upload' type="submit">Guardar</Boton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPreferences