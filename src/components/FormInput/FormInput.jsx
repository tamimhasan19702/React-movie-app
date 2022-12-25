import React from 'react';
import './forminput.scss';

function FormInput({handleChange, label, ...otherProps}) {
  return (
    <div className='group'>
      <input 
      className='form-input' 
      onChange={handleChange}
      {...otherProps}/>
      {
        label ? 
        (<label className={`${otherProps.value.length ? 'shrink' : '' } form-label-input`}>
            {label}
        </label>) : null
      }
    </div>
  )
}

export default FormInput
