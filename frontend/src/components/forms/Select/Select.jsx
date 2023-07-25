import './Select.css'

const Select = (props)=>{

    const { data, onChange } = props

    return(
        <div className="caja">
            <select onChange={onChange}>
                {Object.entries(data).map(([rol, id]) => (
                    <option value={id}>{rol}</option>
                ))}
          </select>
        </div>
    )
}

export default Select