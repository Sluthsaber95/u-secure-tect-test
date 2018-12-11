import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import Modal from '../../components/Modal'

const StoriesModal = () => storiesOf('Modal', module)
  .add('Modal', () => {
    class ModalWrapper extends Component {
      state = { modalOpen: false }
      addUser = () => {
        this.handleClose()
      }

      handleOpen = () => {
        document.body.style.overflow = "hidden"
        this.setState({ modalOpen: true })
      }

      handleClose = () => {
        document.body.style.overflow = "scroll"
        this.setState({ modalOpen: false })
      }

      render() {
        const { modalOpen } = this.state
        return (
          <div>
            <Modal
              addUser={this.addUser}
              modalOpen={modalOpen}
              handleOpen={this.handleOpen}
            />
          </div>
        )
      }
    }
    return <ModalWrapper />
  })

export default StoriesModal