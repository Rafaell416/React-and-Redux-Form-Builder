import React, {Component} from 'react'
import {
  Col,
  Card,
  Button,
  Icon
} from 'react-materialize'


export default class InputCard extends Component {
  render () {
    return (
      <Col m={9} s={12}>
      		<Card key={1}
            className='teal lighten-4'
            textClassName='white-text'
            title='Card title'
            actions={
              [
                <Button waves='light'>Add Sub-Input<Icon right>add</Icon></Button>,
                <Button waves='light'>Delete<Icon right>delete</Icon></Button>
              ]
          }>
      		  I am a very simple card.
      		</Card>
      </Col>
    )
  }
}
