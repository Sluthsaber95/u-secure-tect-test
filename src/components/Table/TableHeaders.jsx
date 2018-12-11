import React from 'react'
import styled from '@emotion/styled'

import globalStyles from '../../globalStyles'

const { typography } = globalStyles()
const { mdBold } = typography

const TableHeaderWrapper = styled.th`
  text-align: left;
  text-transform: capitalize;
  font: ${mdBold};
  letter-spacing: 1.88px;
  border: 0px solid transparent;
  margin-top: 10px;
  padding: 10px 8px 2px 8px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`

const Heading = styled.p`
  margin: 0px;
`

const TableHeaders = ({ columnHeaders }) => (
  <tr>
    {columnHeaders.map(({ name }) => (
      <TableHeaderWrapper>
        <Heading>{name}</Heading>
      </TableHeaderWrapper>
    ))}
  </tr>
)

export default TableHeaders