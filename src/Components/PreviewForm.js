import React, {Component} from 'react'
import {
  Col,
  Card
} from 'react-materialize'

import RadioButtons from './RadioButtons'
import InputText from './InputText'
import InputNumber from './InputNumber'
import QuestionTitle from './QuestionTitle'
import QuestionCard from './QuestionCard'


export default class PreviewForm extends Component {
  render () {
    const data = this.props.data
    return (
      	<Col s={12} m={10} className=' offset-m1'>
          <Card className='grey lighten-2 '>
            {data.map((question) =>
              <QuestionCard question={question}/>
            )}
          </Card>
        </Col>
    )
  }
}
