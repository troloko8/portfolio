import { SET_SCROLL_VALUE } from './action'

const wrapper = { scrollValue: 0 }

export const wrapperReducer = (state = wrapper, action) => {
  switch (action.type) {
    case SET_SCROLL_VALUE:
      return {
        ...state,
        scrollValue: action.payload
      }
    default:
      break
  }

  return state
}