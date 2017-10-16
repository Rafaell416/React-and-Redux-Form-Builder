import React, {Component} from 'react'
import {
  Row,
  Input
} from 'react-materialize'

export default class RadioButtons extends Component {
  render () {
    return (
      <Row>
        <Input name='yes/no' type='radio' value='Yes' label='Yes' />
        <Input name='yes/no' type='radio' value='No' label='No' />
      </Row>
    )
  }
}
