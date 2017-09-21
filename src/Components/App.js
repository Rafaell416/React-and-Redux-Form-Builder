import React, { Component } from 'react'
import '../Styles/App.css'
import Header from './Header'
import FormTabs from '../Containers/Tabs'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className='col s12'>
            <Header title='Indio Form Builder'/>
            <FormTabs />
          </div>
        </div>
      </div>
    )
  }
}
