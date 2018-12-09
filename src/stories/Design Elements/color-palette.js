import React from 'react';

import globalStyles from '../../globalStyles';

const { color, fontFamily } = globalStyles()
const {
  black,
  blueDodger,
  grayDarkSlate,
  silver,
  white,
  whiteSnow
} = color
const { hindGuntur } = fontFamily
const colorList = [
  {
    name: 'White',
    hexcode: white
  },
  {
    name: 'Snow White',
    hexcode: whiteSnow
  },
  {
    name: 'Silver',
    hexcode: silver
  },
  {
    name: 'Dark Slate Gray',
    hexcode: grayDarkSlate
  },
  {
    name: 'Black',
    hexcode: black
  },
  {
    name: 'Dodger Blue',
    hexcode: blueDodger
  },
]

const ColorName = ({ name }) => (
  <h5 style={{
    fontWeight: 'bold',
    margin: '5px 0 0 0',
    textAlign: 'center',
    letterSpacing: 0.2
  }}
  >{name}</h5>
)

const ColorHexcode = ({ hexcode }) => (
  <h5 style={{
    fontWeight: '400',
    margin: '-5px 5px 0 0',
    textAlign: 'center'
  }}>{hexcode}</h5>
)

const Description = ({ name, hexcode }) => (
  <div style={{
    fontFamily: hindGuntur,
    display: 'flex',
    justifyContent: 'center',
    width: 100,
  }}>
    <div>
      <ColorName name={name} />
      <ColorHexcode hexcode={hexcode} />
    </div>
  </div>
)

const ColorContainer = ({ colorUsed }) => {
  let borderUsed;
  return (
    <div style={{
      width: 100,
      height: 100,
      borderRadius: 20,
      background: colorUsed,
      border: borderUsed,
    }}
    />
  )
}

const styleWrapper = {
  width: 'calc(100vw - 100px)',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-around',
  padding: 50
}

const colorPalette = () => (
  <section style={styleWrapper}>
    {colorList.map(({ name, hexcode }) =>
      <section>
        <ColorContainer colorUsed={hexcode} />
        <Description name={name} hexcode={hexcode} />
      </section>
    )}
  </section>
)

export default colorPalette;