import { DO_ACTIVE_NAVIGATION } from './actions'



let header = {
  navStatus: false
}

export const headerReducer = (state = header, action) => {
  switch (action.type) {
    case DO_ACTIVE_NAVIGATION:
      return {
        ...state,
        navStatus: action.payload
      }
    default:
      break
  }

  return state
}