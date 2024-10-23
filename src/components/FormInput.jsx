import React from 'react'
import "./formInput.css"

const FormInput = (props) => {
  return (
    <div className='forminput'>
        {/* <label>Username</label> */}
        <input ref={props.refer} placeholder={props.placeholder}
        
        />
    </div>
  )
}

export default FormInput