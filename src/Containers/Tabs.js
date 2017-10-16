import React, {Component} from 'react'
import AddInput from './AddInput'
import InputCardList from '../Components/InputCardList'
import { connect } from 'react-redux'
import {
  updateInputText,
  updateInputSelect,
  deleteInput,
  addSubInput,
  deleteSubInput,
  updateSubInputCondition,
  updateSubInputAnswer,
  updateSubInputQuestion
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
              addSubInput={this.props.addSubInput}
              deleteSubInput={this.props.deleteSubInput}
              updateSubInputCondition={this.props.updateSubInputCondition}
              updateSubInputAnswer={this.props.updateSubInputAnswer}
              updateSubInputQuestion={this.props.updateSubInputQuestion}
            />
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

const mapDispatchToProps = {
  updateInputText,
  updateInputSelect,
  deleteInput,
  addSubInput,
  deleteSubInput,
  updateSubInputCondition,
  updateSubInputAnswer,
  updateSubInputQuestion
}

FormTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormTabs)

export default FormTabs
