import React, {Component} from 'react'
import {
  Card
} from 'react-materialize'

import RadioButtons from './RadioButtons'
import InputText from './InputText'
import InputNumber from './InputNumber'
import QuestionTitle from './QuestionTitle'


export default class QuestionCard extends Component {
  render () {
    const title = this.props.question.questionText
    const questionType = this.props.question.questionType
    {
      switch (questionType) {
        case 'yes/no':
          return (
            <Card className='white  z-depth-0'>
              <QuestionTitle title={title}/>
              <RadioButtons />
            </Card>
          )
          break;
        case 'number':
          return (
            <Card className='white  z-depth-0'>
              <QuestionTitle title={title}/>
              <InputNumber />
            </Card>
          )
          break;
        case 'text':
          return (
            <Card className='white  z-depth-0'>
              <QuestionTitle title={title}/>
              <InputText />
            </Card>
          )
          break;
        default:
          return null
      }
    }
  }
}
