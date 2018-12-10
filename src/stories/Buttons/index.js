import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from '../../components/Button'

const Buttons = () => storiesOf('Buttons', module)
  .add('Button Classic', () => <Button />)
  .add('Button Inverted', () => <Button optionsUsed={true}/>)

export default Buttons