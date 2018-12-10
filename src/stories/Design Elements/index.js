import { storiesOf } from '@storybook/react';
import colorPalette from './color-palette'
import typographyAll, { BlueThemeText, DarkThemeText, LightThemeText } from './typography'

const DesignElements = () => storiesOf('Design Elements', module)
  .add('Colors', colorPalette)
  .add('Typography - All Texts', typographyAll)
  .add('Typography - Light Theme', LightThemeText)
  .add('Typography - Dark Theme', DarkThemeText)
  .add('Typography - Blue Theme', BlueThemeText)


export default DesignElements