import React, { Fragment } from 'react'

import { ButtonCommon } from './ButtonCommon'

const ButtonToggle = ({
  styleBtn,
  startTrue = true,
  onClick,
  valueTrue="On",
  valueFalse="Off"
}) => {
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
              onClick={onClick}
              inverted={true}
            >{ valueChosen }</ButtonCommon>
      }
    </Fragment>
  )
}

export default ButtonToggle