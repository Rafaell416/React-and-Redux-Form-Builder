import React from 'react'
import {connect} from 'react-redux'
import {addInput} from '../Actions'
import {Button} from 'react-materialize'
import '../Styles/App.css'



let AddInput = ({dispatch}) => {
    return(
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(addInput('hello'))
        console.log('submited')
      }}>
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

AddInput = connect()(AddInput)
export default AddInput
