import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import TableHeaders from './TableHeaders'
import TableDataRows from './TableDataRows'

const TableWrapper = styled.table`
  padding: 20px;
  width: 100%;
  border-collapse: collapse;
`

const styleTableRows = css`
  tr:nth-child(even) {
    background-color: #dddddd;
  }
` 

const columns = [
  {
    name: 'Id'
  },
  {
    name: 'Usernames'
  },
  {
    name: 'email'
  },
  {
    name: '',
    addIcon: true
  },
]

class Table extends Component {
  state = {
    newUserAdded: false,
    userData: [
      {
        id: 1,
        username: 'Jared',
        email: 'charles-dunn@hooli.com'
      },
      {
        id: 2,
        username: 'da_carver',
        email: 'kevin_cloudservice@disroot.com'
      },
      {
        id: 3,
        username: 'RDogHendricks',
        email: 'richard-hendricks@piedpiper.com'
      }
    ]
  }

  addUser = () => {
    this.setState({userData: [...this.state.userData, 
      {
        id: 4,
        username: 'BIgheaD',
        email: 'nelson-bighetti@hooli.com'
      }
    ]})
  }

  render(){
    const { userData } = this.state
    return (
      <Fragment>
        <Global styles={styleTableRows} />
        <TableWrapper>
          <TableHeaders columnHeaders={columns} addUser={this.addUser}/>
          <TableDataRows userData={userData}/>
        </TableWrapper>
      </Fragment>
    )
  }
}

export default Table