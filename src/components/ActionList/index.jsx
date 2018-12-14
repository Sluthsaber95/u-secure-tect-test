import React from 'react';
import styled from '@emotion/styled'

import globalStyles from '../../globalStyles'

const { borderRadius, color, typography } = globalStyles()
const { curve } = borderRadius
const { white, blueDodger } = color
const { smReg } = typography

const ActionListWrapper = styled.article`
  position: absolute;
  margin: 0 auto;
  width: 150px;
  border-radius: ${curve};
  padding: 10px 15px;
  background: ${white};
  box-sizing: border-box;
`

const ActionLi = styled.li`
  list-style: none;
  font: ${smReg};
  color: ${blueDodger};
  letter-spacing: 0.6px;
  padding: 7px 0;
`

const ActionUl = styled.ul`
  padding: 0;
  margin: 0;
`

const ActionList = ({ index, removeUser, clickedOption }) => {
  return (
    <ActionListWrapper>
      <ActionUl>
        <ActionLi onClick={(e) => {
          removeUser(index)
        }}>
          Remove
        </ActionLi>
        <ActionLi>
          Edit
        </ActionLi>
        <ActionLi>
          View Profile
        </ActionLi>
      </ActionUl>
    </ActionListWrapper>
  )
}

export default ActionList