export const TOGGLE_POPUP_WINDOW = 'TOGGLE_POPUP_WINDOW'


export const togglePopup = (status, index) => {
  return {
    type: TOGGLE_POPUP_WINDOW,
    payload: { status: status, index: index }
  }
}