import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Icon,
  Row,
  Input
} from 'react-materialize'


export default class SubInputCard1 extends Component {
  render () {
    let condition = this.props.condition
    let answer = this.props.answer
    let questionText = this.props.questionText
    let questionType = this.props.questionType
    let deleteSubInput = this.props.deleteSubInput
    let updateSubInputCondition = this.props.updateSubInputCondition
    let updateSubInputAnswer = this.props.updateSubInputAnswer
    let updateSubInputQuestion = this.props.updateSubInputQuestion

    let id = this.props.keyProp
    let familyId = this.props.familyId
    let fatherId = this.props.fatherId
    return (
      <Col m={12} s={12} className='offset-m1'>
      		<Card key={id}
            className='grey lighten-2'
            actions={
              [
                <div className='row'>
                  <div className='col s12 m5 offset-m3'>
                    <Button waves='light'>Add Sub-Input<Icon right>add</Icon></Button>
                  </div>
                  <div className='col s12 m4 right'>
                    <Button waves='light' onClick={()=>deleteSubInput(familyId, fatherId, id)}>
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
                onChange={(e)=>updateSubInputCondition(familyId, fatherId, id, e.target.value)}
              >
              		<option value='equals'>Equals</option>
              		<option value='greater-than'>Greather Than</option>
              		<option value='less-than'>Less Than</option>
            	</Input>
              <Input
                placeholder='answer condition'
                s={12} m={4}
                label="Answer"
                onBlur={(e)=>updateSubInputAnswer(familyId, fatherId, id, e.target.value)}
                defaultValue={answer}
              />
            </Row>
            <Row>
              <Input
                placeholder='Type a Question here'
                s={12} m={10}
                label="Question"
                onBlur={(e)=>updateSubInputQuestion(familyId, fatherId, id, e.target.value)}
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
