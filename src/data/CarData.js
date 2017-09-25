import Data from './Data'

const baseUrl = 'cars'

class CarData {
  static statistics () {
    return Data.get('stats')
  }

  static createCar (car) {
    return Data.post(`${baseUrl}/create`, car, true)
  }
}

export default CarData
