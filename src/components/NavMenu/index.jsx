import React, { Component } from 'react'
import styled from '@emotion/styled'

import NavOption from './NavOption'

const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 50px;
`

export default class MenuNav extends Component {
  state = {
    routePicked: 'u-secure'
  }

  handleOptionClick = (event) => {
    this.setState({ routePicked: event.target.name })
  }

  
  render(){
    let { routePicked } = this.state
    const mainRoute = '/settings/'
    const routes = [
      {
        link: 'u-secure',
        navName: 'USecure',
      },
      {
        link: 'users',
        navName: 'Users',
      },
      {
        link: 'security',
        navName: 'Security'
      },
    ]
    return (
      <section style={{ width: 250 }}>
        <NavBar>
          {
            routes.map(({link, navName}) => (
              <NavOption
                name={link}
                link={link}
                onClick={this.handleOptionClick}
                routePicked={routePicked}
                mainRoute={mainRoute}
              >{navName}</NavOption>
            ))
          }
        </NavBar>
      </section>
    )
  }
}