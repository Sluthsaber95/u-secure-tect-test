import React, { Component } from 'react'
import { storiesOf } from '@storybook/react';
import {
  ButtonRectangle,
  ButtonToggle
} from '../../components/Buttons'

const Buttons = () => storiesOf('Buttons', module)
  .add('ButtonRectangle Classic', () => <ButtonRectangle />)
  .add('ButtonRectangle Inverted', () => <ButtonRectangle inverted={true} />)
  .add('ButtonRectangles including Plus Icon', () => {
    return (
      <section style={{padding: 10}}>
        <ButtonRectangle iconPresent={true} inverted={true} />
        <ButtonRectangle iconPresent={true} />
      </section>
    )
  })
  .add('ButtonToggle', () => {
    class ButtonWrapper extends Component {
      state = { btnToggledTrue: false}
      handleToggle = () => {
        this.setState(state => {
          return {btnToggledTrue: !state.btnToggledTrue}
        })
      }
      render(){
        const { btnToggledTrue } = this.state
        return (
          <ButtonToggle
            constantWidth={50}
            startTrue={btnToggledTrue} 
            onClick={this.handleToggle}
            valueTrue="Yes" 
            valueFalse="No" 
          />
        )
      }
    }
    return <ButtonWrapper />
  }
)

export default Buttons