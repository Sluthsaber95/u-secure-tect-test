import React, { Fragment } from 'react'
import TableRow from './TableRow'

const TableDataRows = ({ userData }) => (
  <Fragment>
    {
      userData.map(({ email, id, username }) => (
        <TableRow
          id={id}
          username={username}
          email={email}
        />
      ))
    }
  </Fragment>
)

export default TableDataRows