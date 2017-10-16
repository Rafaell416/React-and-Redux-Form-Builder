import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Row,
  Input
} from 'react-materialize'

import RadioButtons from './RadioButtons'
import InputText from './InputText'
import InputNumber from './InputNumber'
import QuestionTitle from './QuestionTitle'


export default class PreviewForm extends Component {
  render () {
    return (
      	<Col s={12} m={10} className=' offset-m1'>
          <Card className='grey lighten-2'>
            <RadioButtons />
            <InputText />
            <InputNumber />
            <QuestionTitle />
          </Card>
        </Col>
    )
  }
}
