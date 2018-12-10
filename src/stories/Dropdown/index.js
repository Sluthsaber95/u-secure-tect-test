
import React from 'react'
import { storiesOf } from '@storybook/react';
import Dropdown from '../../components/DropDown'

const hourOptions = [
  0, 1, 2
]

const daysOfWeekOptions = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tueday', label: 'Tueday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' },
]

const StoriesDropdown = () => storiesOf('Dropdown', module)
  .add('Dropdown - Hours', () =>
    <section style={{ padding: 10, width: 80 }}>
      <Dropdown numerical={true} options={hourOptions} placeholder="Hours" />
    </section>
  )
  .add('Dropdown - Days', () =>
    <section style={{ padding: 10, width: 150 }}>
      <Dropdown options={daysOfWeekOptions} placeholder="Days" />
    </section>
  )

export default StoriesDropdown;
