import React, { Component } from 'react'
import CarActions from '../../actions/CarActions'
import CarStore from '../../store/CarStore'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: 0,
      users: 0
    }

    this.showStatistics = this.showStatistics.bind(this)
    CarStore.on(CarStore.eventTypes.STATISTICS_RETRIEVED, this.showStatistics)
  }

  componentDidMount () {
    CarActions.getStatistics()
  }

  componentWillUnmount () {
    CarStore.removeListener(CarStore.eventTypes.STATISTICS_RETRIEVED, this.showStatistics)
  }

  showStatistics (data) {
    this.setState({
      cars: data.cars,
      users: data.users
    })
  }

  render () {
    return (
      <div>
        <h3>Welcome to Car System App</h3>
        <div>Total cars: {this.state.cars}</div>
        <div>Total users: {this.state.users}</div>
      </div>
    )
  }
}
export default HomePage
