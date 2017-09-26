import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Icon,
  Row,
  Input
} from 'react-materialize'


export default class SubInputCard extends Component {
  render () {
    let condition = this.props.condition
    return (
      <Col m={12} s={12}>
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
              />
            </Row>
            <Row>
              <Input
                placeholder='Type a Question here'
                s={12} m={10}
                label="Question"
              />
            </Row>
            <Row>
              <Input s={12} m={10}
                type='select'
                label="Type"
                defaultValue='yes/no'
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
