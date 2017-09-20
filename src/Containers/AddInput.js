import React, {Component} from 'react'
//import {connect} from 'react-redux'
//import {addInput} from '../Actions'
import {Button} from 'react-materialize'
import '../Styles/App.css'



export default class AddInput extends Component {
  render(){
    return(
      //<Button waves='light'>Add Input<Icon right>add</Icon></Button>
      <Button floating large className='red' id='float' waves='light' icon='add' />
    )
  }
}
