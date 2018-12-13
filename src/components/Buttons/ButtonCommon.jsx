import styled from '@emotion/styled'

import globalStyles from '../../globalStyles'

const { color, borderRadius, borderSize, typography } = globalStyles();
const { curve } = borderRadius
const { thin } = borderSize;
const { blueDodger, white } = color;
const { smReg } = typography

export const ButtonCommon = styled.button`
height: 45px;
color: ${props => props.inverted ? blueDodger : white};
text-align: center;
background: ${props => props.inverted ? white : blueDodger};
font: ${smReg};
padding: 10px 10px 5px 10px;
box-sizing: border-box;
border: ${thin} solid ${blueDodger};
border-radius: ${curve};
display: flex;
letter-spacing: 1.5px;
`