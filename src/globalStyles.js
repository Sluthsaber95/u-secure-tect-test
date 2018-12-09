const borders = {
  borderSize: {
    none: '0px',
    thin: '1px'
  },
  borderRadius: {
    curve: '5px'
  }
}

const { borderRadius, borderSize } = borders

const color = {
  white: '#FFFFFF',
  whiteSnow: '#F9F9F9',
  silver: '#B5B6B6',
  grayDarkSlate: '#2D2D2D',
  blueDodger: '#1A70E0',
}

const fonts = {
  fontFamily: {
    hindGuntur: `Hind Guntur, Helvetica Neue, Helvetica, Arial, sans-serif`
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
const { regular, bold } = fontWeight

const typography = {
  xlReg: `${xl} ${regular} ${hindGuntur}`,
  lgBold: `${lg} ${bold} ${hindGuntur}`,
  lgReg: `${lg} ${regular} ${hindGuntur}`,
  mdReg: `${md} ${regular} ${hindGuntur}`,
  mdBold: `${md} ${bold} ${hindGuntur}`,
  smReg: `${sm} ${regular} ${hindGuntur}`,
}


const globalStyles = () => {
  return {
    borderRadius,
    borderSize,
    fontFamily,
    color,
    typography,
  }
}

export default globalStyles;