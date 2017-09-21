import React, {Component} from 'react'
import AddInput from './AddInput'
import InputCardList from '../Components/InputCardList'
import SubInputCard from '../Components/SubInputCard'
import { connect } from 'react-redux'
import {
  updateInputText, 
  updateInputSelect,
  deleteInput
} from '../Actions'
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
            <InputCardList
              inputs={this.props.inputs}
              updateInputText={this.props.updateInputText}
              updateInputSelect={this.props.updateInputSelect}
              deleteInput={this.props.deleteInput}
            />
            <div className='contenedor-flex'>
                <AddInput />
            </div>
          </Tab>
          <Tab title="preview" >
            preview
            <SubInputCard />
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

const mapDispatchToProps = {
  updateInputText,
  updateInputSelect,
  deleteInput
}


FormTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormTabs)

export default FormTabs
