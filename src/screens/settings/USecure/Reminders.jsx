import React from 'react'

import Dropdown from '../../../components/Dropdown'
import {
  DescriptionBold,
  Description,
  Row,
  SectionWrapper,
} from '../common'
import { ButtonRectangle } from '../../../components/Buttons'
import {
  optionHours,
  optionNumDays,
  optionMinutes,
} from '../options'

const Reminders = ({ disableComponent, handleToggle }) => (
  <SectionWrapper
    title="Reminders"
    description="Enable sending course reminder emails"
    handleToggle={handleToggle}
    disableComponent={disableComponent}
  >
    <Row>
      {
        disableComponent &&
        <Description
          firstChild={true}
        >Next Reminders sent on <DescriptionBold>Tomorrow, 30th December</DescriptionBold> at <DescriptionBold>15 : 00</DescriptionBold>
        </Description>
      }
    </Row>
    <Row isDisabled={!disableComponent}>
      <Description firstChild={true}>Emails will be sent to recipients</Description>
      <section style={{ padding: 10, width: 170 }}>
        <Dropdown
          isDisabled={!disableComponent}
          options={optionNumDays}
          placeholder="Every 3 Days"
        />
      </section>
      <Description>at</Description>
      <section style={{ padding: 10, width: 90 }}>
        <Dropdown
          isDisabled={!disableComponent}
          options={optionHours}
          placeholder={15}
        />
      </section>
      <Description style={{ margin: '16px 0px' }}>:</Description>
      <section style={{ padding: 10, width: 90 }}>
        <Dropdown
          isDisabled={!disableComponent}
          options={optionMinutes}
          placeholder="00"
        />
      </section>
    </Row>
    <Row>
      {
        disableComponent &&
        <div style={{ marginTop: 20 }}>
          <ButtonRectangle>Send Reminders Now</ButtonRectangle>
        </div>
      }
    </Row>
  </SectionWrapper>
)

export default Reminders