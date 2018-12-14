import React from 'react'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";

import globalStyles from '../../globalStyles'

const { color, typography } = globalStyles()
const { lgReg } = typography
const { blueDodger } = color
const styleLink = {
  textDecoration: 'none'
}

const Option = styled.button`
  list-style: none;
  font: ${lgReg};
  color: ${blueDodger};
  padding: 0;
  margin-bottom: 0px;
  height: 30px;
  background: transparent;
  border: none;
`

const BarDecoration = styled.div`
  width: calc(100%);
  height: 3px;
  background: ${blueDodger};
  margin: 0 auto;
`

const NavOption = ({ children, link, mainRoute, onClick, routePicked }) => (
  <Link style={styleLink} to={mainRoute + link}>
    <Option name={link} onClick={onClick}>
      {children}
    </Option>
    {(link === routePicked) && <BarDecoration />}
  </Link>
)

export default NavOption