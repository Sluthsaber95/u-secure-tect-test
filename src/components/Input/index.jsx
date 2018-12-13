import React from 'react'
import styled from '@emotion/styled'

import globalStyles from '../../globalStyles'
import './input.css'

const { borderSize, color, typography } = globalStyles()
const { none, medium } = borderSize
const { blueDodger } = color
const { lgReg } = typography

const InputWrapper = styled.div`
  padding: 10px;
`

const InputText = styled.input`
  width: ${props => props.width ? props.width : 'auto'};
  min-height: 35px;
  height: 35px;
  text-align: ${props => props.centerized ? 'center' : 'left' };
  font: ${lgReg};
  color: ${blueDodger};
  padding: 0px;
  border-top: ${none} solid transparent;
  border-right: ${none} solid transparent;
  border-bottom: ${medium} solid ${blueDodger};
  border-left: ${none} solid transparent;
  background: transparent;
  ::-webkit-input-placeholder {
    color: ${blueDodger};
  }
`

const InputDisabled = styled.input`
    font: ${lgReg};
      width: ${props => props.width ? props.width : 'auto'};
    ::-webkit-input-placeholder {
      color: ${blueDodger};
    }
    text-align: ${props => props.centerized ? 'center' : 'left' };
    webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
    border-top: ${none} solid transparent;
    border-right: ${none} solid transparent;
    border-bottom: ${medium} solid ${blueDodger};
    border-left: ${none} solid transparent;
    padding: -1px 0px;
    cursor: default;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    outline: 0 !important;
    position: relative;
    -webkit-transition: all 100ms;
    transition: all 100ms;
    box-sizing: border-box;
    pointer-events:none;
    background-color: hsl(0,0%,95%);
`

const Input = ({ centerized=false, isDisabled=false, placeholder, width, }) => {
  return (
    <InputWrapper>
      {isDisabled 
          ?<InputDisabled 
            centerized={centerized}
            placeholder={placeholder} 
            width={width} 
            type="text"
          />
          :<InputText
            centerized={centerized}
            placeholder={placeholder}
            width={width}
            type="text"
          />
      }
    </InputWrapper>
  )
}


export default Input