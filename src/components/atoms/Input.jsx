import React from 'react'

const Input = ({ children, type, setValue, value }) => {
  return (
    <div>
      {children}
      <input
        type={type}
        value={value}
        min='1'
        style={{ width: '50px' }}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default Input
