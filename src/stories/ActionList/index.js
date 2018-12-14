import React from 'react'
import { storiesOf } from '@storybook/react';

import ActionList from '../../components/ActionList'

const StoriesActionList = () => storiesOf('ActionList', module)
  .add('ActionList', () => <ActionList />)

export default StoriesActionList