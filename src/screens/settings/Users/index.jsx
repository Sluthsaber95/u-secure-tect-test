import React, { Component } from 'react'

import Table from '../../../components/Table'
import { Description } from '../common'

export default class Users extends Component {
  render() {
    return (
      <section>
        <Description firstChild={true} smallText={true}>
          What you can do ...
          <ul>
            <li>View all User details</li>
            <li>Add/Remove Users</li>
            <li>Edit Users' details</li>
          </ul>
        </Description>
        <article style={{ marginTop: 50 }}>
          <Table />
        </article>
      </section>
    )
  }
}