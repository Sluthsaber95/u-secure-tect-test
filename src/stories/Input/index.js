import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '../../components/Input'

const StoriesInput = () => storiesOf('Input', module)
  .add('Input', () => <Input />)

export default StoriesInput