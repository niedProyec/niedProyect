import { useContext, useState } from "react";
import SessionContext from "../../../context/sesionContext";
import Boton from "../Boton/Boton"
import TextArea from "../TextArea/TextArea";
import './CommitCase.css';
import { addCommit } from "../../../services/CaseServices";
import { state } from "../../../models/State";

const CommitCase = ({handleClose, ticked, status})=>{

    const { cedula } = useContext(SessionContext);
    const [comentario, setComentario] = useState('');

    const newCommit = async ()=>{
        var res
        if(status===state.new){
            res = addCommit(comentario,cedula,2,ticked);
        }else{
            res = addCommit(comentario,cedula,status,ticked);
        }

        if(res){
            alert("caso comentado");
            handleClose();
            window.location.reload();
        }
    }

    return(
        <div className="formulario-emergente">
            <div className='form-header flex'>
                <div className='hd-title'>
                    Agregar Comentario
                </div>
                <div className='hd-close'>
                    <Boton onClick={handleClose} style='close'>X</Boton>
                </div>
            </div>
            <div className='form-body flex'>
                <form className='form-client flex com'>
                    <TextArea style="new" onChange={(val)=>{setComentario(val.target.value)}}>Nuevo Comentario</TextArea>
                </form>
            </div>
            <div className='form-footer flex'>
                <Boton style='upload' onClick={newCommit}>Agregar</Boton>
            </div>
        </div>
    )
}

export default CommitCase;