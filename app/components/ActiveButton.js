import React from 'react'

export default ({ text, activeText, disabled, isActive, onClick, classname }) => (
  (isActive) ? (
    <button type='button' className={'btn ' + (classname || 'btn-primary')} disabled>
      <span className='glyphicon glyphicon-refresh spinning' /> {activeText || text} &hellip;
    </button>
  ) : (
    <button type='submit' className={'btn ' + (classname || 'btn-primary')} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
)
