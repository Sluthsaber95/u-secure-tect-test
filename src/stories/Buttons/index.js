import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from '../../components/Button'

const Buttons = () => storiesOf('Buttons', module)
  .add('Button Classic', () => <Button />)
  .add('Button Inverted', () => <Button inverted={true} />)
  .add('Buttons including Plus Icon', () => {
    return (
      <section style={{padding: 10}}>
        <Button iconPresent={true} inverted={true} />
        <Button iconPresent={true} />
      </section>
    )
  })

export default Buttons