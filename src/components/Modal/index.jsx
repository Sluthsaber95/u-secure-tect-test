import React, { Component } from 'react'
import styled from '@emotion/styled'

import Form from '../Form'
import { ButtonRectangle } from '../Buttons'

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.9;
`

class Model extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { addUser, modalOpen } = this.props
    return (
      <section>
        {
          modalOpen && 
          <ModalBackground>
            <Form addUser={addUser} modalClose={this.handleClose} />
          </ModalBackground>
        }
        <ButtonRectangle iconPresent={true} onClick={this.props.handleOpen}>Add User</ButtonRectangle>
      </section>
    )
  }
}

export default Model;