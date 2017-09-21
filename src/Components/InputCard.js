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
    console.log('HERE IS THE DATA:',input)
    return (
      <Col m={9} s={12}>
      		<Card key={1}
            className='grey lighten-2'
            actions={
              [
                <div className='row'>
                  <div className='col s12 m5 offset-m3'>
                    <Button waves='light'>Add Sub-Input<Icon right>add</Icon></Button>
                  </div>
                  <div className='col s12 m4 right'>
                    <Button waves='light'>Delete<Icon right>delete</Icon></Button>
                  </div>
                </div>
              ]
          }>
      		  <Row>
              <Input placeholder={input.questionText} s={12} m={10} label="Question" />
            </Row>
            <Row>
            	<Input s={12} m={10}
                type='select'
                label="Type"
                defaultValue={input.questionType}
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
