import React from 'react'

import { ButtonCommon } from './ButtonCommon'
import IconAddBlue from '../../assets/icon-add-blue-dodger.svg'
import IconAddWhite from '../../assets/icon-add-white.svg'


const ButtonRectangle = ({ children = 'Add Button Text', iconPresent = false, inverted = false, onClick }) => (
  <ButtonCommon onClick={onClick} inverted={inverted}>
    {
      iconPresent &&
      <img
        style={{ margin: '2.5px 10px 0px 0px' }}
        wrapper="div"
        src={inverted ? IconAddBlue : IconAddWhite}
      />
    }
    {children}
  </ButtonCommon>
)

export default ButtonRectangle