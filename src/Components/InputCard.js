import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Icon,
  Row,
  Input
} from 'react-materialize'
import SubInputCardList from './SubInputCardList'
import { getChildren } from '../Utils/getChildren'


export default class InputCard extends Component {
  render () {
    //let inputs = this.props.inputs
    let input = this.props.input
    let updateInputText = this.props.updateInputText
    let updateInputSelect = this.props.updateInputSelect
    let deleteInput = this.props.deleteInput
    let inputId = this.props.keyProp
    let Id = this.props.keyProp

    let addSubInput = this.props.addSubInput
    let deleteSubInput = this.props.deleteSubInput
    let updateSubInputCondition = this.props.updateSubInputCondition
    let updateSubInputAnswer = this.props.updateSubInputAnswer
    let updateSubInputQuestion = this.props.updateSubInputQuestion
    let updateSubInputQuestionType = this.props.updateSubInputQuestionType

    let familyId = this.props.familyId
    let fatherId = inputId
    let condition = 'equals'
    let answer = 'yes'
    let questionText = 'Do you like React?'
    let questionType = 'yes/no'

    let children = getChildren(input, familyId, fatherId)

    return (
      <Col m={9} s={12} >
      		<Card key={Id}
            className='grey lighten-2'
            actions={
              [
                <div className='row'>
                  <div className='col s12 m5 offset-m3'>
                    <Button waves='light' onClick={()=>addSubInput(
                      familyId,
                      fatherId,
                      condition,
                      answer,
                      questionText,
                      questionType
                    )}>
                      Add Sub-Input<Icon right>add</Icon>
                    </Button>
                  </div>
                  <div className='col s12 m4 right'>
                    <Button waves='light' onClick={()=>deleteInput(inputId)}>
                      Delete<Icon right>delete</Icon>
                    </Button>
                  </div>
                </div>
              ]
          }>
      		  <Row>
              <Input
                defaultValue={input.questionText}
                placeholder={input.questionText}
                s={12} m={10}
                label="Question"
                onBlur={(e)=>{
                  updateInputText(inputId,e.target.value)}
                }
              />
            </Row>
            <Row>
            	<Input s={12} m={10}
                type='select'
                label="Type"
                defaultValue={input.questionType}
                onChange={(e)=>updateInputSelect(inputId,e.target.value)}
              >
              		<option value='yes/no'>Yes/No</option>
              		<option value='number'>Number</option>
              		<option value='text'>Text</option>
            	</Input>
            </Row>
      		</Card>
            <Col m={12}>
              <SubInputCardList
                children={children}
                deleteSubInput={deleteSubInput}
                updateSubInputCondition={updateSubInputCondition}
                updateSubInputAnswer={updateSubInputAnswer}
                updateSubInputQuestion={updateSubInputQuestion}
                updateSubInputQuestionType={updateSubInputQuestionType}
              />
            </Col>
      </Col>

    )
  }
}

//updateInputText(inputId,e.target.value)
