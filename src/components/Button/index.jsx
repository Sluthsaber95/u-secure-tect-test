import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import globalStyles from '../../globalStyles'

const { color, borderSize, borderRadius, typography } = globalStyles();
const { curve } = borderRadius
const { none, thin } = borderSize;
const { black, blueDodger, white } = color;
const { smReg } = typography

const styleBtn = {
  font: smReg,
  padding: '10px 10px 5px 10px',
  borderSizing: 'border-boxing',
  borderRadius: curve,
}

const ButtonInverted = styled.button`
  border: ${thin} solid ${blueDodger};
  color: ${blueDodger};
  background: ${white};
`

const ButtonNormal = styled.button`
  border: ${none} solid ${black};
  color: ${white};
  background: ${blueDodger};
`

const Button = ({ children = 'Add Button Text', optionsUsed = false }) => {
  return (
    <Fragment>
      {
        optionsUsed
          ? <ButtonInverted style={styleBtn}>{children}</ButtonInverted>
          : <ButtonNormal style={styleBtn}>{children}</ButtonNormal>
      }
    </Fragment>
  )
}

export default Button;