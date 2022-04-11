import { TOGGLE_POPUP_WINDOW } from './action'

const contacts = {
  popupStatus: false,
  popupScreenplay: 0
}

export const contactsReducer = (state = contacts, action) => {
  switch (action.type) {
    case TOGGLE_POPUP_WINDOW:
      return {
        ...state,
        popupStatus: action.payload.status,
        popupScreenplay: action.payload.index
      }
    default:
      break
  }

  return state
}