import React, {Component} from 'react'
import InputCard from './InputCard'


export default class InputCardList extends Component {

  render(){
    let inputs = this.props.inputs
    return (
      <div>
        {inputs.map((input) => {
            <InputCard
              key={input.id}
              {...input}
            />
          })}
      </div>
    )
  }
}
