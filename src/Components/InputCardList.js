import React, {Component} from 'react'
import InputCard from './InputCard'


export default class InputCardList extends Component {
  render(){
    let inputs = this.props.inputs
    let updateInputText = this.props.updateInputText
    let updateInputSelect = this.props.updateInputSelect
    return (
      <div>
        {inputs.map((input) =>
            <InputCard
              key={input.id}
              keyProp={input.id}
              input={input}
              updateInputText={updateInputText}
              updateInputSelect={updateInputSelect}
            />
          )}
      </div>
    )
  }
}
