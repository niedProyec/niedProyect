import './Input.css'

const Input = (props)=>{

    const { children, id, type, style, pos, onchange, required } = props

    return(
        <div className={ pos }>
            <label htmlFor={ id } className={"lb-"+style}>{ children }</label>
            <input type={ type } id={ id } className={"inp-"+style} onChange={ onchange } required={ required }/>
        </div>
    )
}

export default Input;