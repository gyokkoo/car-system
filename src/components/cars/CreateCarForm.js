
import React from 'react'
import Input from '../common/forms/Input'

const CreateCarForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='make'
      type='text'
      placeholder='Make'
      value={props.car.make}
      onChange={props.onChange} />
    <br />
    <Input
      name='model'
      type='text'
      placeholder='Model'
      value={props.car.model}
      onChange={props.onChange} />
    <br />
    <Input
      name='year'
      type='number'
      placeholder='Year'
      value={props.car.year}
      onChange={props.onChange} />
    <br />
    <Input
      name='engine'
      type='text'
      placeholder='Engine'
      value={props.car.engine}
      onChange={props.onChange} />
    <br />
    <Input
      name='price'
      type='number'
      placeholder='Price'
      value={props.car.price}
      onChange={props.onChange} />
    <br />
    <Input
      name='image'
      type='url'
      placeholder='Image URL'
      value={props.car.image}
      onChange={props.onChange} />
    <br />
    <Input
      name='mileage'
      type='number'
      placeholder='mileage'
      value={props.car.mileage}
      onChange={props.onChange} />
    <br />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default CreateCarForm
