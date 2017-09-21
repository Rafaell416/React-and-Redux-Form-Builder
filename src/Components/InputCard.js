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
    return (
      <Col m={9} s={12}>
      		<Card key={this.props.keyProp}
            className='grey lighten-2'
            actions={
              [
                <div className='row'>
                  <div className='col s12 m5 offset-m3'>
                    <Button waves='light'>Add Sub-Input<Icon right>add</Icon></Button>
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
                placeholder={input.questionText}
                s={12} m={10}
                label="Question"
                onChange={(e)=>updateInputText(inputId,e.target.value)}
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
