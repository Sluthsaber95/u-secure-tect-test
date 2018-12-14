import React from 'react'
import { ButtonToggle } from '../../../components/Buttons'

export const ButtonYesNo = ({ disableComponent, onClick }) => {
  const styleBtn = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginTop: 8,
    paddingTop: 8
  }
  return (
    <ButtonToggle
      styleBtn={styleBtn}
      startTrue={disableComponent}
      valueTrue="Yes"
      valueFalse="No"
      onClick={onClick}
    />
  )
}