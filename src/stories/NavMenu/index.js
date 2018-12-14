import React from 'react'
import { storiesOf } from '@storybook/react'
import NavMenu from '../../components/NavMenu'

const StoriesNavMenu = () => storiesOf('NavMenu', module)
  .add('NavMenu', () => <NavMenu />)

export default StoriesNavMenu