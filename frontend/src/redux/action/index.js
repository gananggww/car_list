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

export const actionInsertGarage = (payload) => {
  return {
    type: 'INSERT_GARAGE',
    payload
  }
}

export const actionDeleteGarage = (payload) => {
  return {
    type: 'DELETE_GARAGE',
    payload
  }
}

export const actionModalEditGarage = (payload) => {
  return {
    type: 'MODAL_EDIT_GARAGE',
    payload
  }
}

export const actionEditGarage = (payload) => {
  return {
    type: 'EDIT_GARAGE',
    payload
  }
}

export const garages = () => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage`
  axios.get(url)
  .then(response => {
    if (response.data.data) {
      dispatch(actionGarages(response.data.data))
    } else {
      dispatch(actionGarages([]))
    }
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


export const insertGarage = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage`
  axios.post(url, payload)
  .then(response => {
    if (response.data.status_code == 1) {
      dispatch(actionInsertGarage(response.data.data))
    }
  })
  }
}

export const deleteGarage = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage/${payload.id}`
  axios.delete(url)
  .then(response => {
    if (response.data.status_code == 1) {
      dispatch(actionDeleteGarage(payload))
    }
  })
  }
}


export const editGarage = (payload) => {
  return (dispatch, getState) => {
  const id = getState().edit_value.id
  const url = `http://localhost:3001/api/garage/${id}`
  axios.put(url, payload)
  .then(response => {
    if (response.data.status_code == 1) {
      payload.id = id
      dispatch(actionEditGarage(payload))
    }
  })
  }
}
