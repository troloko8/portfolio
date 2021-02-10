export const CHANGE_WEBSITE_VISIBLE = 'CHANGE_WEBSITE_VISIBLE'
export const CHANGE_WEBSITE_DATA = 'CHANGE_WEBSITE_DATA'
export const CALC_CURRENT_ITEM_POSITION = 'CALC_CURRENT_ITEM_POSITION'
export const CHANGE_SIZE_WEBSITE = 'CHANGE_SIZE_WEBSITE'

export const setWebsiteVisible = (status) => ({
  type: CHANGE_WEBSITE_VISIBLE,
  payload: status,
})

export const setWebsiteData = (obj, status) => ({
  type: CHANGE_WEBSITE_DATA,
  payload: obj,
  status: status
})

export const getCurrentPosition = (x, y) => ({
  type: CALC_CURRENT_ITEM_POSITION,
  payload: {
    x: x,
    y: y
  },
})

export const getSizeItem = (w, h) => ({
  type: CHANGE_SIZE_WEBSITE,
  payload: {
    w: w,
    h: h
  }
})
