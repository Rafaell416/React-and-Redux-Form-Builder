import React, {Component} from 'react'
import SubInputCard1 from './SubInputCard1'


export default class SubInputCardList extends Component {
  render(){
    let children = this.props.children
    let deleteSubInput = this.props.deleteSubInput
    let updateSubInputCondition = this.props.updateSubInputCondition
     let updateSubInputAnswer = this.props.updateSubInputAnswer
    let updateSubInputQuestion = this.props.updateSubInputQuestion
    let updateSubInputQuestionType = this.props.updateSubInputQuestionType
    return (
      <div>
        {children.map((child) =>
            <SubInputCard1
              key={child.id}
              keyProp={child.id}
              child={child}
              children={children}
              familyId={child.familyId}
              fatherId={child.fatherId}
              answer={child.answer}
              condition={child.condition}
              questionText={child.questionText}
              questionType={child.questionType}
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
