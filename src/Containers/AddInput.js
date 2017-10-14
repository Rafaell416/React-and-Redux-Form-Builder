import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addInput} from '../Actions'
import {Button} from 'react-materialize'


class AddInput extends Component {
  render(){
    let question = 'type a question here?'
    let type = 'yes/no'
    let dispatch = this.props.dispatch
    return(
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addInput(question, type))
      }}>
      {/* <input ref={q => question = q} />
      <input ref={t => type = t} /> */}
          <Button floating large
            className='red'
            type='submit'
            id='float'
            waves='light'
            icon='add'
          />
      </form>
    )
  }
}


export default connect()(AddInput)
