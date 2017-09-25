import React, { Component } from 'react'
import Auth from '../users/Auth'
import { Link } from 'react-router-dom'
import userStore from '../../store/UserStore'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: Auth.getUser().name
    }

    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLoggedIn)
  }

  handleUserLoggedIn (data) {
    if (data.success) {
      this.setState({
        username: data.user.name
      })
    }
  }

  render () {
    return (
      <div className='menu'>
        {
          Auth.isUserAuthenticated() ? (
            <div>
              <Link to='/car-system'>Home</Link>&nbsp;|&nbsp;
              <Link to='/cars/create'>Add car</Link>&nbsp;|&nbsp;
              <span>{this.state.username}</span>&nbsp;|&nbsp;
              <Link to='/logout'>Logout</Link>
            </div>
          ) : (
            <div>
              <Link to='/car-system'>Home</Link>&nbsp;|&nbsp;
              <Link to='/car-system/users/login'>Login</Link>&nbsp;|&nbsp;
              <Link to='/car-system/users/signup'>Sign up</Link>
            </div>
          )
        }
      </div>
    )
  }
}

export default Navbar
