import React, {Component} from 'react'
import {
  Row,
  Input
} from 'react-materialize'

export default class InputNumber extends Component {
  render () {
    return (
      <Row>
        <Input type='number' s={6} label='Number' />
      </Row>
    )
  }
}
