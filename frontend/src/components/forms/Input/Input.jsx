import './Input.css'

const Input = (props)=>{

    const { children, id, type, style, pos, onChange, required } = props

    return(
        <div className={ pos }>
            <label htmlFor={ id } className={"lb-"+style}>{ children }</label>
            <input type={ type } id={ id } className={"inp-"+style} onChange={ onChange } required={ required }/>
        </div>
    )
}

export default Input;