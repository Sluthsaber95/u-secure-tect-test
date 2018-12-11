import React from 'react'
import styled from '@emotion/styled'

import globalStyles from '../../globalStyles'
import Button from '../../components/Button'

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
  margin: 0px 0 -12px 0;
`

const TableHeaders = ({ columnHeaders, addUser }) => (
  <tr>
    {columnHeaders.map(({ name, addIcon }) => (
      <TableHeaderWrapper>
        {
          addIcon &&
          <ButtonWrapper style={{ marginBottom: 15 }}>
            <Button onClick={addUser} iconPresent={true}>Add User</Button>
          </ButtonWrapper>
        }
        <Heading>{name}</Heading>
      </TableHeaderWrapper>
    ))}
  </tr>
)

export default TableHeaders