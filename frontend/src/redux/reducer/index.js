const defaultState = {
  garages: [],
  car: []
}

const garageReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'GARAGES':
      return {...state, garages: action.payload}
      case 'CARS':
        return {...state, car: action.payload}
    default:
    return state
  }
}

export default garageReducer
