import React, {Component} from 'react'
import '../Styles/App.css'
import {
  Tabs,
  Tab
} from 'react-materialize'
import AddInput from './AddInput'
import InputCard from '../Components/InputCard'

export default class FormTabs extends Component {
  render(){
    return(
      <Tabs className='tab-demo z-depth-1'>
          <Tab title="create" active>
            <InputCard />
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