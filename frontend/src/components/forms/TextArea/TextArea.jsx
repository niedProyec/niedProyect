import './TextArea.css'

const TextArea = (props)=>{

    const { children, style, onChange } = props
    return(
        <div className='cont1'>
            <p className={'p-'+style}>{children}</p>
            <textarea className={'txt-'+style} onChange={onChange}></textarea>
        </div>
    )
}
export default TextArea