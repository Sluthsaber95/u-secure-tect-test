import React from 'react'

import Dropdown from '../../../components/Dropdown'
import Input from '../../../components/Input'
import {
  Description,
  Row,
  SectionWrapper,
} from '../common'
import {
  optionHours,
  optionDays,
  optionMinutes,
} from '../options'

const Subscriptions = ({ disableComponent, handleToggle }) => (
  <SectionWrapper
    title="Subscription"
    description="Automatically subscribe people to the course"
    handleToggle={handleToggle}
    disableComponent={disableComponent}
  >
    <Row isDisabled={!disableComponent}>
      <Description firstChild={true}>Every</Description>
      <Input
        isDisabled={!disableComponent}
        centerized={true}
        placeholder={2}
        width="50px"
      />
      <Description>weeks on a</Description>
      <section style={{ padding: 10, width: 160 }}>
        <Dropdown
          isDisabled={!disableComponent}
          options={optionDays}
          placeholder="Wednesday"
        />
      </section>
      <Description>at</Description>
      <section style={{ padding: 10, width: 90 }}>
        <Dropdown
          isDisabled={!disableComponent}
          options={optionHours}
          placeholder={10}
        />
      </section>
      <Description style={{ margin: '16px 0px' }}>:</Description>
      <section style={{ padding: 10, width: 90 }}>
        <Dropdown
          isDisabled={!disableComponent}
          options={optionMinutes}
          placeholder={30}
        />
      </section>
    </Row>
  </SectionWrapper>
)

export default Subscriptions