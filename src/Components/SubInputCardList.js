import React, {Component} from 'react'
import SubInputCard1 from './SubInputCard1'


export default class SubInputCardList extends Component {
  render(){
    let children = this.props.children
    let deleteSubInput = this.props.deleteSubInput
    return (
      <div>
        {children.map((child) =>
            <SubInputCard1
              key={child.id}
              keyProp={child.id}
              child={child}
              familyId={child.familyId}
              fatherId={child.fatherId}
              answer={child.answer}
              condition={child.condition}
              questionText={child.questionText}
              questionType={child.questionType}
              deleteSubInput={deleteSubInput}
            />
          )}
      </div>
    )
  }
}
