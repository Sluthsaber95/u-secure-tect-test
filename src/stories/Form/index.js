import React from 'react'
import { storiesOf } from '@storybook/react'

import Form from '../../components/Form'

const StoriesForm = () => storiesOf('Form', module)
  .add('Form', () => <Form />)

export default StoriesForm