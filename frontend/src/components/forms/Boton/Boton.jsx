import './Boton.css'

/**
 * se crea un componente Boton para utilizarlo cuando sea requerido
 */

const Boton = (props)=>{

    /**
     * este recibe unas propiedades que de acuerdo a sus valores este tiene un comportamiento
     * determinado
     */

    const { children, style, id, onClick, ref} = props

    return(
        <button className={'btn-'+style} id={ id } onClick={ onClick } ref={ ref }>{ children }</button>
    )
}

export default Boton;