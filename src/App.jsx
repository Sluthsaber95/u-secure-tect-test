import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'

import globalStyles from './globalStyles'
import SettingsUSecure from './screens/settings/USecure'

const { color, typography } = globalStyles()
const { grayDarkSlate } = color
const { xlReg } = typography

const AppWrapper = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
  height: 100vw;
  background: transparent;
`

const Title = styled.h1`
  font: ${xlReg};
  color: ${grayDarkSlate};
  margin-top: 0;
  padding: 50px 0 ;
  letter-spacing: 1px;
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppWrapper>
          <Title>Settings</Title>
          <SettingsUSecure />
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
