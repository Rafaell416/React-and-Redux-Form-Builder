import React, { Component } from 'react'
import '../Styles/App.css'
import {
  Tabs,
  Tab
} from 'react-materialize'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className='col s12'>
            <div className="App-header">
              <h2 className='left'>Form Builder</h2>
            </div>
            <div>
              <Tabs className='tab-demo z-depth-1'>
                  <Tab title="create" active>create</Tab>
                  <Tab title="preview" >preview</Tab>
                  <Tab title="export">export</Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
