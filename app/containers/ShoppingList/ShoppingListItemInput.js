import React from 'react'

export default ({value, isSaving, onChange, onSubmit}) => 
  <form onSubmit={onSubmit}>
    <input 
      type='text'
      placeholder='Add item to list'
      value={value}
      onChange={onChange}
    />
    {isSaving ? <span>Saving...</span> : null}
  </form>
  