import styled from '@emotion/styled'

import globalStyles from '../../../globalStyles'

const { color, typography } = globalStyles()
const { grayDarkSlate } = color
const { lgReg } = typography

export const SubTitle = styled.h2`
  font: ${lgReg};
  color: ${grayDarkSlate};
  letter-spacing: 1px;
  margin-bottom: 0px;
`