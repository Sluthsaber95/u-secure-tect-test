import React from 'react'
import styled from '@emotion/styled'

import iconSVGActions from '../../assets/icon-actions.svg'
import globalStyles from '../../globalStyles'

const { color, typography } = globalStyles()
const { blueDodger, grayDarkSlate } = color
const { mdLight } = typography

const TableData = styled.td`
  font: ${mdLight};
  letter-spacing:  1.44px;
  border: 0px solid transparent;
  padding: 8px 8px 8px 10px;
  text-align: left;
  color: ${
    props => props.containLink 
      ? blueDodger 
      : grayDarkSlate
  };
`

const TableActions = styled.td`
  font: ${mdLight};
  text-align: right;
`

const IconActions = styled.img`
  margin-top: 10px;
  padding-right: 15px;
`

const TableRow = ({ email, id, username}) => (
  <tr>
    <TableData>{id}</TableData>
    <TableData containLink={true}>{username}</TableData>
    <TableData containLink={true}>{email}</TableData>
    <TableActions>
      <IconActions src={iconSVGActions} />
    </TableActions>
  </tr>
)

export default TableRow