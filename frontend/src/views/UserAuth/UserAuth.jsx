import Input from '../../components/forms/Input/Input.jsx'
import Boton from '../../components/forms/Boton/Boton.jsx'
import { useNavigate } from 'react-router-dom';
import './UserAuth.css'

// este modulo es para validar si el cliente es el coorespondiente a un caso, para que pueda ver
// el seguimiento que se le ha realziado

const UserAuth = ()=>{

    // se hace una constante de navegacion para poder navegar a otras paginas

    const Navigate = useNavigate();

    // se valida el usuario y se hace el respectivo direccionamiento

    function validate(){
        Navigate('/case/1');
    }

    // se retorna el formulario para validar el cliente

    return(
        <div className="container-auth">
            <div className='container-val'>
                <div className='form-val'>
                    <div className='separator textt'>
                        <p className='title'>Validar identidad</p>
                    </div>
                    <form>
                        <div className='form-auth separator'>
                            <Input style='login'>IDENTIFICACION:</Input>
                            <div className="paraf-rec">
                                <p>Ingresa tu numero de identificacion para confirmar el ingreso</p>
                            </div>
                        </div>
                        <div className="paraf-rec">
                            <Boton style='login' onClick={validate}>Ingresar</Boton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserAuth