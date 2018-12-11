import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Button from '../Button'
import globalStyles from '../../globalStyles'
const { borderRadius, borderSize, color, typography } = globalStyles()
const { curve } = borderRadius
const { medium } = borderSize
const { black, blueDodger, grayDarkSlate } = color
const { mdLight, mdReg } = typography

const FormWrapper = styled.section`
  position: relative;
  padding: 20px;
  background: white;
  width: 300px;
  border-radius: ${curve};
`

const Label = styled.label`
  display: block;
  font: ${mdLight};
  color: ${grayDarkSlate};
  letter-spacing: 0.9px;
  margin-bottom: -5px;
`

const Input = styled.input`
  width: 100%;
  font: ${mdReg};
  color: ${black};
  padding: 0px;
  letter-spacing: 0.9px;
  border-top: 0px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: ${medium} solid ${blueDodger};
  border-left: 0px solid transparent;
`

const InputWrapper = styled.article`
  margin: 0 0 25px 0;
`

const ButtonWrapper = styled.div`
  margin: 15px 0 0 0;
  letter-spacing: 1px;
`

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    const { username, email } = this.state;
    const userDetails = { username, email }
    this.props.addUser(userDetails)
    event.preventDefault();
  }
  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <InputWrapper>
            <Label>Username</Label>
            <Input type="text" name="username" onChange={this.handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <Input type="email" name="email" onChange={this.handleChange} />
          </InputWrapper>
          {
            this.props.children
          }
          <ButtonWrapper>
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    );
  }
}

export default Form