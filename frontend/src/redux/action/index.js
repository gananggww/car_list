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

export const actionLogin = (payload) => {
  return {
    type: 'LOGIN',
    payload
  }
}

export const actionErr = (payload) => {
  return {
    type: 'ERROR',
    payload
  }
}




export const garages = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage`
  axios.get(url, {headers: {token: payload}})
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
  axios.post(url, payload.form, {headers:{token:payload.token}})
  .then(response => {
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
    if (response.data.status_code == 1) {
      dispatch(actionInsertCar(response.data.data))
    }
  })
  }
}

export const deleteGarage = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/garage/${payload.e.id}`
  axios.delete(url, {headers: {token: payload.token}})
  .then(response => {
    if (response.data.status_code == 1) {
      dispatch(actionDeleteGarage(payload.e))
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
  axios.put(url, payload.form, {headers:{token: payload.token}})
  .then(response => {
    if (response.data.status_code == 1) {
      payload.form.id = id
      dispatch(actionEditGarage(payload.form))
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
    if (response.data.status_code == 1) {
      payload[0].id = id
      dispatch(actionEditCar(payload[0]))
    }
  })
  }
}


export const login = (payload) => {
  return (dispatch, getState) => {
  const url = `http://localhost:3001/api/user/login`
  axios.post(url, payload)
  .then(response => {
    console.log(response);
    if (response.data.status_code == 1) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('role', response.data.role)
      let tokenStat = localStorage.getItem('token')
      let role = localStorage.getItem('role')
      if (tokenStat && role) {
        dispatch(actionLogin({tokenStat, role}))
      }
    } else {
      dispatch(actionErr(response.data.messege))
    }
  })
  }
}
