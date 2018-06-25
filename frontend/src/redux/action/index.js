import axios from 'axios'

export const actionGarages = (payload) => {
  return {
    type: 'GARAGES',
    payload
  }
}

export const actionCars = (payload) => {
  return {
    type: 'CARS',
    payload
  }
}

export const garages = () => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage`
  axios.get(url)
  .then(response => {
    dispatch(actionGarages(response.data.data))
  })
  }
}

export const cars = (id) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/car/${id}`
  axios.get(url)
  .then(response => {
    dispatch(actionCars(response.data.data))
  })
  }
}
