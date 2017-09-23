import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Icon,
  Row,
  Input
} from 'react-materialize'


export default class InputCard extends Component {
  render () {
    let input = this.props.input
    let updateInputText = this.props.updateInputText
    let updateInputSelect = this.props.updateInputSelect
    let deleteInput = this.props.deleteInput
    let inputId = this.props.keyProp
    let Id = this.props.keyProp

    let addSubInput = this.props.addSubInput
    /*let condition = 'equals'
    let answer = 'yes'
    let questionText = 'Hello World'
    let questionType = 'yes/no'
    onClick={()=>addSubInput(Id)}*/
    return (
      <Col m={9} s={12}>
      		<Card key={Id}
            className='grey lighten-2'
            actions={
              [
                <div className='row'>
                  <div className='col s12 m5 offset-m3'>
                    <Button waves='light' >
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
      </Col>

    )
  }
}

//updateInputText(inputId,e.target.value)
