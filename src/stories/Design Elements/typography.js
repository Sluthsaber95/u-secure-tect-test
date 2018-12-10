import React from 'react';

import '../../index.css'
import globalStyles from '../../globalStyles';

const { color, fontFamily, fontSize, fontWeight } = globalStyles()
const {
  black,
  blueDodger, 
  grayDarkSlate, 
  silver, 
  white
} = color
const { hindGuntur } = fontFamily
const { sm, md, lg, xl } = fontSize
const { bold, light, regular } = fontWeight
const typographyList = [
  {
    fontSize: sm,
    fontWeight: regular,
    color: silver,
  },
  {
    fontSize: md,
    fontWeight: regular,
    color: silver,
  },
  {
    fontSize: md,
    fontWeight: regular,
    color: blueDodger,
  },
  {
    fontSize: md,
    fontWeight: regular,
    color: grayDarkSlate,
  },
  {
    fontSize: md,
    fontWeight: bold,
    color: grayDarkSlate,
  },
  {
    fontSize: lg,
    fontWeight: regular,
    color: blueDodger,
  },
  {
    fontSize: lg,
    fontWeight: bold,
    color: blueDodger,
  },
  {
    fontSize: xl,
    fontWeight: light,
    color: grayDarkSlate,
  },
]

const addFontFamily = (typeList, mainFont) => {
  return typeList.map(font => { return { ...font, fontFamily: mainFont } })
}

const TextLayout = ({ typeList }) => {
  return (
    <section style={{padding: 20}}>
    {
      typeList.map(styleText => {
        const { fontFamily, fontSize, fontWeight } = styleText
        let weight;
        switch(fontWeight){
          case 300:
            weight = 'Light'
            break;
          case 400:
            weight = 'Regular'
            break;
          case 700:
            weight = 'Bold'
            break;
        }
        return (
          <div style={styleText}>{`${fontSize} ${weight} ${fontFamily}`}</div>
        )
      })
    }
    </section>
  )
}



export const LightThemeText = () => (
  <TextLayout 
    typeList={addFontFamily(typographyList, hindGuntur)} />
)

export const DarkThemeText = () => {
  const darkThemeList = typographyList.map(typeFont => {
    const { color } = typeFont
    const fontTransformColor = color === grayDarkSlate 
      ? { ...typeFont, color: white }
      : typeFont
    return fontTransformColor
  })
  return (
    <section style={{ background: black }}>
      <TextLayout
        typeList={addFontFamily(darkThemeList, hindGuntur)} />
    </section>
  )
}

export const BlueThemeText = () => {
  const blueThemeList = typographyList.map(typeFont => {
    const { color } = typeFont
    const fontTransformColor = color === silver 
      ? typeFont
      : { ...typeFont, color: white }
    return fontTransformColor
  })
  return (
    <section style={{ background: blueDodger }}>
      <TextLayout
        typeList={addFontFamily(blueThemeList, hindGuntur)} />
    </section>
  )
}

const typographyAll = () => (
  <section>
    <LightThemeText />
    <DarkThemeText />
    <BlueThemeText />
  </section>
)

export default typographyAll