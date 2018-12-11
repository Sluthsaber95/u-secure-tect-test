import React from 'react'
import { storiesOf } from '@storybook/react';
import Table from '../../components/Table'

const StoriesTable = () => storiesOf('Table', module)
  .add('Table', () =>
    <section style={{ padding: 10 }}>
      <Table />
    </section>
  )

export default StoriesTable;
