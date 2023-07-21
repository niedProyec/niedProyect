import './Select.css'

const Select = (props)=>{

    const { data } = props

    return(
        <div className="caja">
            <select >
                {Object.entries(data).map(([rol, id]) => (
                    <option key={id} value={id}>{rol}</option>
                ))}
          </select>
        </div>
    )
}

export default Select