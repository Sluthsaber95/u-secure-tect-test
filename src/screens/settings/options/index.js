import { generateArrayInteger } from '../../../vendor/utils'

const genOptionInt = (start, end) => {
  return generateArrayInteger(start, end).map(number => {
    return { value: number, label: number }
  })
}

const optionDays = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tueday', label: 'Tueday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' },
]

const optionHours = genOptionInt(1, 24)

const optionNumDays = [
  { value: 3, label: 'Every 3 Days' },
  { value: 7, label: 'Every 7 Days' },
]

const optionMinutes = [
  { value: 0, label: '00' },
  { value: 15, label: '15' },
  { value: 30, label: '30' },
  { value: 45, label: '45' }
]

export {
  optionDays,
  optionHours,
  optionNumDays,
  optionMinutes,
}