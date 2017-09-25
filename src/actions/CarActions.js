import dispatcher from '../dispatcher'

const carActions = {
  types: {
    CREATE_CAR: 'CREATE_CAR',
    GET_STATISTICS: 'GET_STATISTICS'
  },
  getStatistics () {
    dispatcher.dispatch({
      type: this.types.GET_STATISTICS
    })
  },
  createCar (car) {
    dispatcher.dispatch({
      type: this.types.CREATE_CAR,
      car
    })
  }
}

export default carActions
