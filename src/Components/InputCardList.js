import React, {Component} from 'react'
import InputCard from './InputCard'


export default class InputCardList extends Component {

  render(){
    let inputs = this.props.inputs
    let updateInputText = this.props.updateInputText
    let updateInputSelect = this.props.updateInputSelect
    let deleteInput = this.props.deleteInput
    let addSubInput = this.props.addSubInput
    let deleteSubInput = this.props.deleteSubInput
    let updateSubInputCondition= this.props.updateSubInputCondition
    let updateSubInputAnswer = this.props.updateSubInputAnswer
    let updateSubInputQuestion = this.props.updateSubInputQuestion
    let updateSubInputQuestionType = this.props.updateSubInputQuestionType
    return (
      <div>
        {inputs.map((input) =>
            <InputCard
              key={input.id}
              keyProp={input.id}
              input={input}
              familyId={input.familyId}
              updateInputText={updateInputText}
              updateInputSelect={updateInputSelect}
              deleteInput={deleteInput}
              addSubInput={addSubInput}
              deleteSubInput={deleteSubInput}
              updateSubInputCondition={updateSubInputCondition}
              updateSubInputAnswer={updateSubInputAnswer}
              updateSubInputQuestion={updateSubInputQuestion}
              updateSubInputQuestionType={updateSubInputQuestionType}
            />
          )}
      </div>
    )
  }
}
