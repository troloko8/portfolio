import { DO_ACTIVE_NAVIGATION } from './actions'
import { TOGGLE_HEADER_ANIMATION } from './actions'


let header = {
  navStatus: false,
  animationStatus: false
}

export const headerReducer = (state = header, action) => {
  switch (action.type) {
    case DO_ACTIVE_NAVIGATION:
      return {
        ...state,
        navStatus: action.payload
      }
    case TOGGLE_HEADER_ANIMATION:
      return {
        ...state,
        animationStatus: action.payload
      }
    default:
      break
  }

  return state
}