const garage = (body) => {
  if (body.name) {
    if (body.address) {
      if (body.phone_number) {
        if (body.email) {
          if (body.max_car) {
            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(body.email)) {
              return 'pass'
            } else {
              return {
                status_code: 0,
                messege: 'Email field must follow a valid e-mail format (e.g. test123@gmail.com).'
              }
            }
          } else {
            return {
              status_code: 0,
              messege: 'Garage max capacity cannot be empty'
            }
          }
        } else {
          return {
            status_code: 0,
            messege: 'Garage e-mail cannot be empty'
          }
        }
      } else {
        return {
          status_code: 0,
          messege: 'Garage phone number cannot be empty'
        }
      }
    } else {
      return {
        status_code: 0,
        messege: 'Garage address cannot be empty'
      }
    }
  } else {
    return {
      status_code: 0,
      messege: 'Garage name cannot be empty'
    }
  }
}

const car = (body) => {
  if (body.brand) {
    if (body.model) {
      if (body.year) {
        if (body.color) {
          if (body.mileage) {
            if (body.engine) {
              if (body.power) {
                if (body.price) {
                  if (body.garages_id) {
                    return 'pass'
                  } else {
                    return {
                      status_code: 0,
                      messege: 'atleast choose one garage'
                    }
                  }
                } else {
                  return {
                    status_code: 0,
                    messege: 'Car price cannot be empty'
                  }
                }
              } else {
                return {
                  status_code: 0,
                  messege: 'Car power cannot be empty'
                }
              }
            } else {
              return {
                status_code: 0,
                messege: 'Car engine cannot be empty'
              }
            }
          } else {
            return {
              status_code: 0,
              messege: 'Car mileage cannot be empty'
            }
          }
        } else {
          return {
            status_code: 0,
            messege: 'Car color cannot be empty'
          }
        }
      } else {
        return {
          status_code: 0,
          messege: 'Car year cannot be empty'
        }
      }
    } else {
      return {
        status_code: 0,
        messege: 'Car model cannot be empty'
      }
    }
  } else {
    return {
      status_code: 0,
      messege: 'Car brand cannot be empty'
    }
  }
}
module.exports = {
  garage,
  car
}
