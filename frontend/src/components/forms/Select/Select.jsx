import './Select.css'

const Select = (props)=>{

    const { data, onChange, style, children} = props

    return(
        <div>
            <p className='ps'>{children}</p>
            <div className={style}>
                <select onChange={onChange}>
                    {Object.entries(data).map(([rol, id]) => (
                        <option value={id}>{rol}</option>
                    ))}
            </select>
            </div>
        </div>
    )
}

export default Select