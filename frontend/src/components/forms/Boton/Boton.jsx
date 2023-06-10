import './Boton.css'

const Boton = (props)=>{

    const { children, style } = props

    return(
        <button className={'btn-'+style}>{ children }</button>
    )
}

export default Boton;