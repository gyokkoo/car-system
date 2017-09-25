import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import CarData from '../data/CarData'
import CarActions from '../actions/CarActions'

class CarStore extends EventEmitter {
  getStatistics () {
    CarData
      .statistics()
      .then(data => this.emit(this.eventTypes.STATISTICS_RETRIEVED, data))
  }

  createCar (car) {
    CarData
      .createCar(car)
      .then(data => this.emit(this.eventTypes.CAR_CREATED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case CarActions.types.GET_STATISTICS: {
        this.getStatistics()
        break
      }
      case CarActions.types.CREATE_CAR: {
        this.createCar(action.car)
        break
      }
      default:
        break
    }
  }
}

let carStore = new CarStore()

carStore.eventTypes = {
  STATISTICS_RETRIEVED: 'statistics_retrieved',
  CAR_CREATED: 'car_created'
}

dispatcher.register(carStore.handleAction.bind(carStore))

export default carStore
