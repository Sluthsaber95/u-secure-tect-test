import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import { storiesOf } from '@storybook/react'
import NavMenu from '../../components/NavMenu'

const StoriesNavMenu = () => storiesOf('NavMenu', module)
  .add('NavMenu', () => (
    <Router>
      <NavMenu />
    </Router>
  ))

export default StoriesNavMenu