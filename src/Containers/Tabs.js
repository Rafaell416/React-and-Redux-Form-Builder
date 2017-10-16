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
  updateSubInputQuestion,
  updateSubInputQuestionType
} from '../Actions'
import '../Styles/App.css'
import {
  Tabs,
  Tab
} from 'react-materialize'

import JsonView from 'react-pretty-json'
import 'react-pretty-json/assets/json-view.css'

class FormTabs extends Component {
  render(){
    let json = this.props.inputs
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
              updateSubInputQuestionType={this.props.updateSubInputQuestionType}
            />
            <div className='contenedor-flex'>
                <AddInput />
            </div>
          </Tab>
          <Tab title="preview" >
            Preview
          </Tab>
          <Tab title="export">
              <JsonView json={json} spaces={4}/>
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
  updateSubInputQuestion,
  updateSubInputQuestionType
}

FormTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormTabs)

export default FormTabs
