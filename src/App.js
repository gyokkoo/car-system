import React, { Component } from 'react'
import Routes from './components/common/routes/Routes'
import Navbar from './components/common/Navbar'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
