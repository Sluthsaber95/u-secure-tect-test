const borders = {
  borderSize: {
    none: '0px',
    thin: '1px',
    medium: '2px'
  },
  borderRadius: {
    curve: '5px'
  }
}

const { borderRadius, borderSize } = borders

const color = {
  black: '#000000',
  blueDodger: '#1A70E0',
  grayDarkSlate: '#2D2D2D',
  silver: '#B5B6B6',
  white: '#FFFFFF',
  whiteSnow: '#F9F9F9',
}

const fontBackup = {
  helvetica: ', Helvetica Neue, Helvetica, Arial, sans-serif'
}

const fonts = {
  fontFamily: {
    hindGuntur: `Hind Guntur`
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700
  },
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  }
}

const { fontFamily, fontSize, fontWeight } = fonts;
const { hindGuntur } = fontFamily
const { sm, md, lg, xl } = fontSize;
const { light, regular, bold } = fontWeight
const mainFont = `${hindGuntur}${fontBackup.helvetica}`

const typography = {
  xlReg: `${regular} ${xl} ${mainFont}`,
  lgBold: `${bold} ${lg} ${mainFont}`,
  lgReg: `${regular} ${lg} ${mainFont}`,
  mdLight: `${light} ${md} ${mainFont}`,
  mdReg: `${regular} ${md} ${mainFont}`,
  mdBold: `${bold} ${md} ${mainFont}`,
  smReg: `${regular} ${sm} ${mainFont}`,
}


const globalStyles = () => {
  return {
    borderRadius,
    borderSize,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    typography,
  }
}

export default globalStyles;