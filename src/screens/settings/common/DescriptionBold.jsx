import styled from '@emotion/styled'

import globalStyles from '../../../globalStyles'

const { color, typography } = globalStyles()
const { blueDodger } = color
const { lgReg } = typography

export const DescriptionBold = styled.span`
  font: ${lgReg};
  color: ${blueDodger};
  letter-spacing: 2px;
`