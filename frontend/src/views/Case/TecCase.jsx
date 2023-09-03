import { addCommit, commitCase, despCase } from "../../services/CaseServices";
import { useEffect, useState, React, useContext } from "react";
import SessionContext from "../../context/sesionContext";
import Boton from "../../components/forms/Boton/Boton";
import { useParams } from "react-router-dom";
import { state } from "../../models/State";
import './Case.css';

const Case = ()=>{

    const { id } = useParams();

    const { cedula } = useContext(SessionContext);
    const [title, setTitle] = useState();
    const [status, setStatus] = useState();
    const [seguimiento, setSeguimiento] = useState();
    const [cliente, setCliente] = useState();
    const [commit, setCommit] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const dataCase = await despCase(id);
            const data = dataCase[0]; 
            const commitC = await commitCase(id);
            setTitle(data.titulo);
            setStatus(data.estado_ticket);
            setSeguimiento(data.seguimiento);
            setCliente(data.usuario);
            setCommit(commitC)
        }
        getData();
    },[id])

    function color(number){
        if(number == 1){
            return 'case-col-green'
        }
        if(number ==2){
            return 'case-col-bGreen'
        }
    }

    async function support(){
        const res = await addCommit("se ha iniciado el soporte al caso",`${cedula}`,2,id);
        if(res){
            window.location.reload();
        }
    }

    return(
        <div className="case-container flex">
            <div className="case-desc">
                <div className="case-header flex">
                    <div className="case-nb flex">
                        {status===state.new && <i className="bi bi-circle-fill cg"></i>}
                        {status===state.process && <i className="bi bi-circle cg"></i>}
                        <p>Ticket - {id}</p>
                    </div>
                    <div className="flex btn-option">
                        <Boton style="add">Agregar comentario</Boton>
                        <Boton style="add">Solicitar autorizacion</Boton>
                        {status===state.new && <Boton style="add" onClick={support}>Iniciar soporte</Boton>}
                    </div>
                </div>
                <div className="case-title">
                    <p>{title}</p>
                </div>
                <div className="flex case-det">
                    <div className="flex case-det-opc">
                        <p>Seguimiento:</p>
                        <div className="case-des">
                            {seguimiento}
                        </div>
                    </div>
                    <div className="flex case-det-opc">
                        <p>Cliente:</p>
                        <div className="case-des">
                            {cliente}
                        </div>
                    </div>
                </div>
                    {commit.map((caseC)=>{
                        return(
                            <div className="case-seg flex">
                                <div className="case-tec flex">
                                    <div className="user_tec flex">
                                        {caseC.usuario}
                                    </div>
                                </div>
                                <div className={"case-tec-des "+color(caseC.estado_ticket)}>
                                    {caseC.comentario}
                                </div>
                            </div>
                        );
                    })}
                    
            </div>
        </div>
    )
}

export default Case