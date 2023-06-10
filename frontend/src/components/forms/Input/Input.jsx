import './Input.css'

const Input = (props)=>{

    const { children, id, type, style, pos } = props

    return(
        <div className={ pos }>
            <label htmlFor={ id } className={"lb-"+style}>{ children }</label>
            <input type={ type } id={ id } className={"inp-"+style}/>
        </div>
    )
}

export default Input;