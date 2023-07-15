import './Input.css'

//se crea el componente Input

const Input = (props)=>{

    // este componte recive diferentes propiedades y de acuerdo a cada una este tiene
    // un comportamiento y visualizacion diferente

    const { children, id, type, style, pos, onChange, required, value, disabled } = props

    return(
        <div className={ pos }>
            <label htmlFor={ id } className={"lb-"+style}>{ children }</label>
            <input type={ type } id={ id } className={"inp-"+style} onChange={ onChange } required={ required } value={value} disabled={disabled}/>
        </div>
    )
}

export default Input;