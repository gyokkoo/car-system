import React, { Component } from 'react'
import FormHelpers from '../common/forms/FormHelpers'
import CreateCarForm from './CreateCarForm'
import CarActions from '../../actions/CarActions'
import CarStore from '../../store/CarStore'

import toastr from 'toastr'

class CreateCarPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {
        make: '',
        model: '',
        year: 0,
        engine: '',
        price: 0,
        image: '',
        mileage: 0
      },
      error: ''
    }

    this.handleCarCreated = this.handleCarCreated.bind(this)

    CarStore.on(CarStore.eventTypes.CAR_CREATED, this.handleCarCreated)
    // userStore.on(userStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin)
  }

  handleCarForm (event) {
    event.preventDefault()
    // TODO: validate the form

    CarActions.createCar(this.state.car)
  }

  handleCarCreated (data) {
    if (!data.success) {
      let error = FormHelpers.getFirstError(data)
      this.setState({
        error
      })
    } else {
      const id = data.car.id
      toastr.success(data.message)
      this.props.history.push(`/hotels/details/${id}`)
    }
    console.log(data.message)
  }

  handleCarChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'car')
  }

  render () {
    return (
      <div>
        <h2>Create car</h2>
        <CreateCarForm
          car={this.state.car}
          error={this.state.error}
          onChange={this.handleCarChange.bind(this)}
          onSave={this.handleCarForm.bind(this)} />
      </div>
    )
  }
}

export default CreateCarPage
