const defaultState = {
  garages: [],
  car: [],
  edit_modal: 'none',
  edit_value: {},
  editCar_modal: 'none',
  editCar_value: {},
  token: null
}

const garageReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'GARAGES':
      return {...state, garages: action.payload}
    case 'CARS':
      return {...state, car: action.payload}
    case 'INSERT_GARAGE':
      return {...state, garages: state.garages.concat(action.payload)}
    case 'DELETE_GARAGE':
      return {...state, garages: [...state.garages.filter(e => e.id !== action.payload.id)]}
    case 'MODAL_EDIT_GARAGE':
      return {...state, edit_modal: action.payload[1], edit_value: action.payload[0]}
    case 'EDIT_GARAGE':
      return {...state, garages: [...state.garages.map(g => g.id === action.payload.id ? action.payload : g)]}
    case 'INSERT_CAR':
      return {...state, car: state.car.concat(action.payload)}
    case 'DELETE_CAR':
      return {...state, car: [...state.car.filter(e => e.id !== action.payload.id)]}
    case 'MODAL_EDIT_CAR':
      return {...state, editCar_modal: action.payload[1], editCar_value: action.payload[0]}
    case 'EDIT_CAR':
      return {...state, car: [...state.car.map(g => g.id === action.payload.id ? action.payload : g)]}
    case 'LOGIN':
      return {...state, token: action.payload}
    default:
    return state
  }
}

export default garageReducer
