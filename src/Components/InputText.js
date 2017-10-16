import React, {Component} from 'react'
import {
  Row,
  Input
} from 'react-materialize'

export default class InputText extends Component {
  render () {
    return (
      <Row>
        <Input s={6} label="Question?" />
      </Row>
    )
  }
}
