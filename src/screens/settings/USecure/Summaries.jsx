import React from 'react'

import {
  Row,
  SectionWrapper,
} from '../common'
import { ButtonRectangle } from '../../../components/Buttons'

const Summaries = () => (
  <SectionWrapper
    title="Summaries"
    description="These reports consist of user/employee activities"
    showToggle={false}
  >
    <Row>
      <ButtonRectangle>Send Weekly Summaries</ButtonRectangle>
    </Row>
  </SectionWrapper>
)

export default Summaries