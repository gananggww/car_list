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

export const actionInsertCar = (payload) => {
  return {
    type: 'INSERT_CAR',
    payload
  }
}

export const actionDeleteGarage = (payload) => {
  return {
    type: 'DELETE_GARAGE',
    payload
  }
}

export const actionDeleteCar = (payload) => {
  return {
    type: 'DELETE_CAR',
    payload
  }
}

export const actionModalEditGarage = (payload) => {
  return {
    type: 'MODAL_EDIT_GARAGE',
    payload
  }
}
export const actionModalEditCar = (payload) => {
  return {
    type: 'MODAL_EDIT_CAR',
    payload
  }
}

export const actionEditGarage = (payload) => {
  return {
    type: 'EDIT_GARAGE',
    payload
  }
}

export const actionEditCar = (payload) => {
  return {
    type: 'EDIT_CAR',
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
    console.log(response);
    if (response.data.status_code == 1) {
      dispatch(actionCars(response.data.data))
    } else {
      dispatch(actionCars([]))
    }
  })
  }
}


export const insertGarage = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage`
  axios.post(url, payload)
  .then(response => {
    console.log(response);
    if (response.data.status_code == 1) {
      dispatch(actionInsertGarage(response.data.data))
    }
  })
  }
}

export const insertCar = (payload) => {
  return (dispatch, getState) => {
  payload[0].garages_id = payload[1]
  const url = `http://localhost:3001/api/car`
  axios.post(url, payload[0])
  .then(response => {
    console.log(response);
    if (response.data.status_code == 1) {
      dispatch(actionInsertCar(response.data.data))
    }
  })
  }
}

export const deleteGarage = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage/${payload.id}`
  axios.delete(url)
  .then(response => {
    console.log('==========',response);
    if (response.data.status_code == 1) {
      dispatch(actionDeleteGarage(payload))
    }
  })
  }
}

export const deleteCar = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/car/${payload.id}`
  axios.delete(url)
  .then(response => {
    if (response.data.status_code == 1) {
      dispatch(actionDeleteCar(payload))
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

export const editCar = (payload) => {
  return (dispatch, getState) => {
  const id = getState().editCar_value.id
  payload[0].garages_id = payload[1]
  const url = `http://localhost:3001/api/car/${id}`
  axios.put(url, payload[0])
  .then(response => {
    console.log(response);
    if (response.data.status_code == 1) {
      payload[0].id = id
      dispatch(actionEditCar(payload[0]))
    }
  })
  }
}
