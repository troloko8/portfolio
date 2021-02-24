export const DO_ACTIVE_NAVIGATION = 'DO_ACTIVE_NAVIGATION'
export const TOGGLE_HEADER_ANIMATION = 'TOGGLE_HEADER_ANIMATION'

export const setNavigationClass = (status) => ({
  type: DO_ACTIVE_NAVIGATION,
  payload: status
})

export const toggleHeaderAnimation = (status) => ({
  type: TOGGLE_HEADER_ANIMATION,
  payload: status
})