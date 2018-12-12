import React, { Fragment } from 'react'

import { ButtonCommon } from './ButtonCommon'

const ButtonToggle = ({
  constantWidth=100,
  startTrue = true,
  onClick,
  valueTrue="On",
  valueFalse="Off"
}) => {
  const styleBtn = { 
    display: 'flex',
    justifyContent: 'center',
    width: constantWidth || "auto",
  }
  const valueChosen = startTrue ? valueTrue : valueFalse
  return (
    <Fragment>
      {
        startTrue 
          ? <ButtonCommon
              style={styleBtn}
              onClick={onClick}
            >{ valueChosen }</ButtonCommon>
          : <ButtonCommon
              style={styleBtn}
              constantWidth={constantWidth}
              onClick={onClick}
              inverted={true}
            >{ valueChosen }</ButtonCommon>
      }
    </Fragment>
  )
}

export default ButtonToggle