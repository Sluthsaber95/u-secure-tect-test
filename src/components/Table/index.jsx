import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import Modal from '../Modal'
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
    name: 'Usernames'
  },
  {
    name: 'email'
  },
  {
    name: ''
  },
]

class Table extends Component {
  state = {
    modalOpen: false,
    newUserAdded: false,
    userData: [
      {
        username: 'Jared',
        email: 'charles-dunn@hooli.com'
      },
      {
        username: 'da_carver',
        email: 'kevin_cloudservice@disroot.com'
      },
      {
        username: 'RDogHendricks',
        email: 'richard-hendricks@piedpiper.com'
      }
    ]
  }

  addUser = (newUserDetails) => {
    this.setState(state => {
      this.handleClose()
      return {
        userData: [...state.userData,
          newUserDetails
        ]
      }
    })
  }

  handleOpen = () => {
    document.body.style.overflow = "hidden"
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    document.body.style.overflow = "scroll"
    this.setState({ modalOpen: false })
  }

  render(){
    const { modalOpen, userData } = this.state
    return (
      <Fragment>
        <Global styles={styleTableRows} />
        <Modal 
          addUser={this.addUser}
          modalOpen={modalOpen}
          handleOpen={this.handleOpen}
        />
        <TableWrapper>
          <TableHeaders columnHeaders={columns} addUser={this.addUser}/>
          <TableDataRows userData={userData}/>
        </TableWrapper>        
      </Fragment>
    )
  }
}

export default Table