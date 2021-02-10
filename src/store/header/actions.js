import { type } from "jquery"

export const DO_ACTIVE_NAVIGATION = 'DO_ACTIVE_NAVIGATION'

export const setNavigationClass = (status) => ({
  type: DO_ACTIVE_NAVIGATION,
  payload: status
})