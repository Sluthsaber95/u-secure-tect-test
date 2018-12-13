import React from 'react'
import {
  ButtonYesNo,
  Description,
  Row,
  SubTitle,
} from './index'

export const SectionWrapper = ({ children, description, disableComponent, handleToggle, title }) => (
  <section style={{ marginBottom: 100 }}>
    <SubTitle>{title}</SubTitle>
    <Row>
      <Description firstChild={true}>{description}</Description>
      <ButtonYesNo disableComponent={disableComponent} onClick={handleToggle} />
    </Row>
    {React.Children.map(children, child =>
      React.cloneElement(child, { disableComponent })
    )}
  </section>
)