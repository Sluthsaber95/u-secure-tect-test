import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'

import Table from '../../components/Table'
import TableHeaders from '../../components/Table/TableHeaders'
import TableRow from '../../components/Table/TableRow'

const TableWrapper = styled.table`
  padding: 20px;
  width: 100%;
  border-collapse: collapse;
`

const StoriesTable = () => storiesOf('Table', module)
  .add('Table', () =>
    <section style={{ padding: 10 }}>
      <Table />
    </section>
  ).add('TableRow', () => {
    const columns = [
      {
        name: 'Usernames'
      },
      {
        name: 'email'
      },
      {
        name: ''
      },
    ]
    
    return (
      <TableWrapper>
        <TableHeaders columnHeaders={columns} />
        <TableRow
          email="end_near@hearthstone.com"
          index={0}
          removeUser={() => {}}
          username="Doomsayer"
        />
      </TableWrapper>
    )
  })

export default StoriesTable;
