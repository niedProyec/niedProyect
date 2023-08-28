import { useContext, useState } from 'react'
import Boton from '../../components/forms/Boton/Boton'
import Input from '../../components/forms/Input/Input'
import Select from '../../components/forms/Select/Select'
import TextArea from '../../components/forms/TextArea/TextArea'
import { CreateTicket } from '../../services/CaseServices'
import SessionContext from '../../context/sesionContext.jsx'
import './CreateCase.css'

const CreateCase = ()=>{

    const { cedula } = useContext(SessionContext)
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [cliente, setCliente] = useState();


    async function InsertCase(){
        const res = await CreateTicket(cliente,cedula, title, desc, '1')
        if(res){
            alert("caso agregado")
          }
    }

    return(
        <div className='CreateContainer flex'>
            <form className='containerform' onSubmit={InsertCase}>
                <div className='headerCreate flex'>
                    <div className='createTitle flex'>
                        <p><i class="bi bi-circle-fill cg"></i> Configurar nuevo caso</p>
                    </div>
                    <div className='createbtn flex'>
                        <Boton style='add'>Registar</Boton>
                    </div>
                </div>
                <div className='createForm grid'>
                    <div>
                        <Input style='create' pos='column' onChange={(val)=>setTitle(val.target.value)} required={true}>Titulo:</Input>
                        <TextArea style='new' required={true} onChange={(val)=>setDesc(val.target.value)}>Descripción del caso:</TextArea>
                    </div>
                    <div>
                        <Input style='create' pos='column' required={true} onChange={(val)=>setCliente(val.target.value)}>Identificación cliente:</Input>
                        <Select data={{'correo':'1'}} style="bblue">seguimiento:</Select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateCase