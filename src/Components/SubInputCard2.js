import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Icon,
  Row,
  Input
} from 'react-materialize'



export default class SubInputCard2 extends Component {
  render () {
    let condition = this.props.condition
    let answer = this.props.answer
    let questionText = this.props.questionText
    let questionType = this.props.questionType
    return (
      <Col m={12} s={12} className='offset-m1'>
      		<Card key={1}
            className='grey lighten-2'
            actions={
              [
                <div className='row'>
                  <div className='col s12 m5 offset-m3'>
                    <Button waves='light'>Add Sub-Input<Icon right>add</Icon></Button>
                  </div>
                  <div className='col s12 m4 right'>
                    <Button waves='light'>
                      Delete<Icon right>delete</Icon>
                    </Button>
                  </div>
                </div>
              ]
          }>
            <Row>
            	<Input s={12} m={8}
                type='select'
                label="Condition"
                defaultValue={condition}
              >
              		<option value='equals'>Equals</option>
              		<option value='greater-than'>Greather Than</option>
              		<option value='less-than'>Less Than</option>
            	</Input>
              <Input
                placeholder='answer condition'
                s={12} m={4}
                label="Answer"
                defaultValue={answer}
              />
            </Row>
            <Row>
              <Input
                placeholder='Type a Question here'
                s={12} m={10}
                label="Question"
                defaultValue={questionText}
              />
            </Row>
            <Row>
              <Input s={12} m={10}
                type='select'
                label="Type"
                defaultValue={questionType}
              >
                <option value='yes/no'>Yes/No</option>
                <option value='text'>Text</option>
                <option value='number'>Number</option>
              </Input>
            </Row>
      		</Card>

      </Col>

    )
  }
}