import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

function todos (state = {}, action) {
  return state
}

function errorMessage (state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const reducer = combineReducers({
  todos,
  errorMessage
})

export default reducer
