import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import LoginPage from '../../users/LoginPage'
import RegisterPage from '../../users/RegisterPage'
import LogoutPage from '../../users/LogoutPage'
import HomePage from '../../cars/HomePage'
import CreateCarPage from '../../cars/CreateCarPage'

const Routes = () => (
  <Switch>
    <Route path='/car-system/users/login' component={LoginPage} />
    <Route path='/car-system/users/signup' component={RegisterPage} />
    <Route path='/car-system' component={HomePage} />
    <PrivateRoute path='/logout' component={LogoutPage} />
    <PrivateRoute exact path='/cars/create' component={CreateCarPage} />
  </Switch>
)

export default Routes
