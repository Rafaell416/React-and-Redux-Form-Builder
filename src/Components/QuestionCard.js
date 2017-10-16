import React, {Component} from 'react'
import {
  Col,
  Card
} from 'react-materialize'

import RadioButtons from './RadioButtons'
import InputText from './InputText'
import InputNumber from './InputNumber'
import QuestionTitle from './QuestionTitle'


export default class QuestionCard extends Component {
  render () {
    const title = this.props.question.questionText
    return (
          <Card className='grey  z-depth-0'>
            <QuestionTitle title={title}/>
          </Card>
    )
  }
}
