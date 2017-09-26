import React, {Component} from 'react'
import SubInputCard from './SubInputCard'


export default class SubInputCardList extends Component {
  render(){
    let children = this.props.children
    return (
      <div>
        {children.map((child) =>
            <SubInputCard
              key={child.id}
              keyProp={child.id}
              child={child}
              familyId={child.familyId}
              fatherId={child.fatherId}
              answer={child.answer}
              condition={child.condition}
              questionText={child.questionText}
              questionType={child.questionType}
            />
          )}
      </div>
    )
  }
}
