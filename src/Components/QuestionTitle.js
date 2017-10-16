import React, {Component} from 'react'
import {
  Row
} from 'react-materialize'

export default class QuestionTitle extends Component {
  render () {
    const title = this.props.title
    return (
      <Row>
        <h5>{title}</h5>
      </Row>
    )
  }
}
