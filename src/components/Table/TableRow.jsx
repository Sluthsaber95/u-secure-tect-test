import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'

import ActionList from '../ActionList'
import iconSVGActions from '../../assets/icon-actions.svg'
import globalStyles from '../../globalStyles'

const { color, typography } = globalStyles()
const { blueDodger, grayDarkSlate } = color
const { mdLight } = typography

const TableData = styled.td`
  font: ${mdLight};
  letter-spacing:  1.44px;
  border: 0px solid transparent;
  padding: 8px 8px 8px 10px;
  text-align: left;
  color: ${
  props => props.containLink
    ? blueDodger
    : grayDarkSlate
  };
`

const TableActions = styled.td`
  font: ${mdLight};
  text-align: right;
`

const IconActions = styled.img`
  margin-top: 10px;
  padding-right: 15px;
`

class TableRow extends Component {
  constructor(props){
    super(props)
  }
  state = {
    optionShow: false
  }

  displayOptions = () => {
    this.setState(() => {
      return {
        optionShow: true
      }
    })
  }

  removeOption = (event) => {
    const DOMNode = ReactDOM.findDOMNode(this);
    if (!DOMNode || !DOMNode.contains(event.target)) {
      this.setState(() => {
        return {
          optionShow: false
        }
      })
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.removeOption, true);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.removeOption, true);
  }

  render() {
    const { optionShow } = this.state
    const { email, index, removeUser, username } = this.props
    return (
      <tr style={{ position: 'relative' }}>
        <TableData containLink={true}>{username}</TableData>
        <TableData containLink={true}>{email}</TableData>
        <TableActions onClick={this.displayOptions}>
          <IconActions src={iconSVGActions} />
          {
            optionShow && <ActionList index={index} removeUser={removeUser}/>
          }
        </TableActions>
      </tr>
    )
  }
}

export default TableRow