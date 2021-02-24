export const SET_SCROLL_VALUE = 'SET_SCROLL_VALUE'

export const setScrollValue = (value) => {
  return {
    type: SET_SCROLL_VALUE,
    payload: value
  }
}