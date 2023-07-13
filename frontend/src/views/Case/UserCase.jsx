import './Case.css'

const UserCase = ()=>{
    return(
        <div className='container-cu'>
            <div className='center flex'>
                <div className='container-case flex'>
                    <div className='case-list'>
                        <div className='ti'>
                            Ticket #1
                        </div>
                        <div className='tks nc'>
                            Tecnico 1: se recibe el equipo y se le hará una revision para deerminar las causas del fallo presentado
                        </div>
                        <div className='tks nc'>
                            Tecnico 1: Despues de revisar el equipo se determina que la mejor solucion para el inconveniente presentado es cambiar la memoria por una de 4 GB que cuesta $$$$, se solicita aprovación
                        </div>
                        <div className='flex'>
                                <div className='btnn bve'>
                                    Aceptar
                                </div>
                                <div className='btnn br'>
                                    Rechazar
                                </div>
                            </div>
                        <div className='tks bve'>
                            Cliente 1: ha aprovado la solicitud!!
                        </div>
                        <div className='tks nc'>
                            Tecnico 1: se ha realizado el cambio correspondiente y el equipo esta disponible para recogerlo
                        </div>
                        <div className='tks cr'>
                            Tecnico 1: El equipo ha entrado en garantía por un tiempo de 30 días
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCase