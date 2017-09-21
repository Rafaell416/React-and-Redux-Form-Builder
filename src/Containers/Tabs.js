import React, {Component} from 'react'
import AddInput from './AddInput'
import InputCardList from '../Components/InputCardList'
import { connect } from 'react-redux'
import '../Styles/App.css'
import {
  Tabs,
  Tab
} from 'react-materialize'

class FormTabs extends Component {
  render(){
    return(
      <Tabs className='tab-demo z-depth-1'>
          <Tab title="create" active>
            <InputCardList />
            <div className='contenedor-flex'>
                <AddInput />
            </div>
          </Tab>
          <Tab title="preview" >
            preview
          </Tab>
          <Tab title="export">
            export
          </Tab>
      </Tabs>
    )
  }
}

let mapStateToProps = (state) => ({
  inputs: state.inputs
})

FormTabs = connect(
  mapStateToProps
)(InputCardList)

export default FormTabs
