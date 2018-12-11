import React from 'react'
import styled from '@emotion/styled'

import IconAddBlue from '../../assets/icon-add-blue-dodger.svg'
import IconAddWhite from '../../assets/icon-add-white.svg'
import globalStyles from '../../globalStyles'

const { color, borderRadius, borderSize, typography } = globalStyles();
const { curve } = borderRadius
const { thin } = borderSize;
const { blueDodger, white } = color;
const { smReg } = typography

const ButtonRectangle = styled.button`
color: ${props => props.inverted ? blueDodger : white };
background: ${props => props.inverted ? white : blueDodger };
font: ${smReg};
padding: 10px 10px 5px 10px;
border-sizing: border-boxing;
border: ${thin} solid ${ blueDodger };
border-radius: ${curve};
display: flex;
letter-spacing: 1.5px;
`

const Button = ({ children = 'Add Button Text', iconPresent=false, inverted = false, onClick }) => {
  return (
    <ButtonRectangle onClick={onClick} inverted={inverted}>
      {
        iconPresent &&
        <img
          style={{ margin: '2.5px 10px 0px 0px' }}
          wrapper="div"
          src={ inverted ? IconAddBlue : IconAddWhite }
        />
      }
      {children}
    </ButtonRectangle>
  )
}

export default Button;