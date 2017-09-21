import React, {Component} from 'react'
import '../Styles/App.css'
import {
  Tabs,
  Tab
} from 'react-materialize'
import AddInput from '../Containers/AddInput'


export default class FormTabs extends Component {
  render(){
    return(
      <Tabs className='tab-demo z-depth-1'>
          <Tab title="create" active>
            create input
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
