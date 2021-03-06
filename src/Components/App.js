import React, { Component } from 'react'
import '../Styles/App.css'
import Header from './Header'
import FormTabs from '../Containers/Tabs'
//import AddInput from '../Containers/AddInput'
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className='col s12'>
            <Header title='Form Builder'/>
            <FormTabs />
          </div>
        </div>
      </div>
    )
  }
}
