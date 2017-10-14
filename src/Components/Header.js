import React from 'react'
import PropTypes from 'prop-types'


const Header = ({title}) => (
  <div className="App-header">
   <h2 className='left'>{title}</h2>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
