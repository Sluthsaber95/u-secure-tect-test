import { storiesOf } from '@storybook/react';
import colorPalette from './color-palette'

const DesignElements = () => storiesOf('Design Elements', module)
  .add('Colors', colorPalette)

export default DesignElements