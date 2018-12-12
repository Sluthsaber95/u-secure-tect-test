import React from 'react'
import styled from '@emotion/styled'

import globalStyles from '../../globalStyles'

const { borderSize, color, typography } = globalStyles()
const { none, medium } = borderSize
const { blueDodger } = color
const { lgReg } = typography

const InputWrapper = styled.div`
  padding: 10px;
`

const InputText = styled.input`
  font: ${lgReg};
  color: ${blueDodger};
  border-top: ${none} solid transparent;
  border-right: ${none} solid transparent;
  border-bottom: ${medium} solid ${blueDodger};
  border-left: ${none} solid transparent;
`

const Input = () => {
  return (
    <InputWrapper>
      <InputText type="text" placeholder="" />
    </InputWrapper>
  )
}


export default Input