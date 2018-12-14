import styled from '@emotion/styled'

import globalStyles from '../../../globalStyles'

const { color, typography } = globalStyles()
const { grayDarkSlate } = color
const { smReg, mdLight } = typography

export const Description = styled.p`
  font: ${props => props.smallText ? smReg : mdLight};
  color: ${grayDarkSlate};
  letter-spacing: 2px;
  margin-left: ${props => props.firstChild ? '0px' : '15px'};
  margin-right: 15px;
`