import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from '@emotion/styled'

import globalStyles from './globalStyles'
import NavMenu from './components/NavMenu'
import { SettingSecurity, SettingUSecure, SettingUsers }from './screens/settings'

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
  padding-top: 50px;
  letter-spacing: 1px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Title>Settings</Title>
          <NavMenu />
          <Switch>
            <Route exact path="/settings/u-secure" render={props => <SettingUSecure title="Settings" />} />
            <Route path="/settings/security" render={props => <SettingSecurity title="Settings" />} />
            <Route path="/settings/users" render={props => <SettingUsers title="Settings" />} />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
