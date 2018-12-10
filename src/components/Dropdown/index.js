import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Select from 'react-select'
import './dropdown.css'

const Dropdown = ({ numerical = false, options, placeholder }) => {
  const optionsPassed = options.map(hour => { return { value: hour, label: hour } })
  return (
    <Fragment>
      {
        numerical 
          ? <Select options={optionsPassed} placeholder={placeholder} />
          : <Select options={options} placeholder={placeholder} />
      }
    </Fragment>
  )
}

export default Dropdown