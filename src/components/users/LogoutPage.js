import React, { Component } from 'react'
import Auth from './Auth'

class LogoutPage extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
    Auth.removeUser()
    this.props.history.push('/car-system')
  }

  render () {
    return (
      <div>Hello</div>
    )
  }
}

export default LogoutPage
