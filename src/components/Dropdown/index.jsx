import React, { Component } from 'react'
import Select from 'react-select'
import './dropdown.css'

class Dropdown extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState(() => {
      return { 
        selectedOption, 
        placeholder: selectedOption
      }
    })
  }

  render() {
    const { selectedOption } = this.state
    const { isDisabled=false, options, placeholder } = this.props
    return (
      <Select
        isDisabled={isDisabled}
        isSearchable={false}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder={placeholder}
      />
    )
  }
}

export default Dropdown