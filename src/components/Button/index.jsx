import React from 'react'

const ButtonOptions = ({ children }) => (<button>{children}</button>)
const ButtonNormal = ({ children }) => (<button>{children}</button>)

const Button = ({ children, optionType }) => {
  return (
    <button>{children}</button>
  )
}

export default Button;