import React, { Component } from 'react'

import Table from '../../../components/Table'
import { Description, DescriptionBold, Row } from '../common'

export default class Users extends Component {
  render() {
    return (
      <section>
        <Description firstChild={true}>
          Access Level: <DescriptionBold>Admin</DescriptionBold>
        </Description>
        <Description firstChild={true} smallText={true}>
          This access level enables full rights to 
          <ul>
            <li>View all User details</li>
            <li>Add Users</li>
            <li>Remove Users</li>
            <li>Edit Users' details</li>
            <li>Send Users' password reset links</li>
          </ul>
        </Description>
        <article style={{ marginTop: 50 }}>
          <Table />
        </article>
      </section>
    )
  }
}