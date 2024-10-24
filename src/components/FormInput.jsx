import React from 'react'
import "./formInput.css"

const FormInput = (props) => {
  const {label, onChange, id, ...inputProps} = props
  return (
    <div className='forminput'>
        <label>{label}</label>
        <input {...inputProps} onChange={onC hange}  />
    </div>
  )
}

export default FormInput