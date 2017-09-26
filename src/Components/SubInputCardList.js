import React, {Component} from 'react'
import SubInputCard from './SubInputCard'
import { getChildren } from '../Utils/getChildren'
import { getIdPair } from '../Utils/getIdPair'


export default class SubInputCardList extends Component {
  render(){
    let inputs = this.props.inputs
    let fatherId = this.props.fatherId
    let familyId = this.props.familyId
    let children = getChildren(inputs, familyId, fatherId)
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
