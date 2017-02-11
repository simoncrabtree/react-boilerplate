import React from 'react'

export default ({value, onChange, onSubmit}) => 
  <form onSubmit={onSubmit}>
    <input 
      type='text'
      placeholder='Add item to list'
      value={value}
      onChange={onChange}
    />
  </form>
  