import { CHANGE_WEBSITE_VISIBLE } from './actions'
import { CHANGE_WEBSITE_DATA } from './actions'
import { CALC_CURRENT_ITEM_POSITION } from './actions'
import { CHANGE_SIZE_WEBSITE } from './actions'
import { TOGGLE_POPUP_EXPO_WINDOW } from './actions'

let websiteStatus = {
  websiteStatus: false,
  img: null,
  name: '',
  link: '',
  linkGit: '',
  technology: [],
  description: '',
  expo: false,
  position: {
    x: 0,
    y: 0
  },
  size: {
    w: '200px',
    h: '130px'
  },
  expoPopupStatus: false
}

export const websiteReducer = (state = websiteStatus, action) => {
  switch (action.type) {
    case CHANGE_WEBSITE_VISIBLE:
      return {
        ...state,
        websiteStatus: action.payload,
      }
    case CHANGE_WEBSITE_DATA:
      return {
        ...state,
        websiteStatus: action.status,
        img: action.payload.img,
        name: action.payload.name,
        link: action.payload.link,
        linkGit: action.payload.linkGit,
        technology: action.payload.technology,
        description: action.payload.description,
        expo: action.payload.expo ? true : false
      }
    case CALC_CURRENT_ITEM_POSITION:
      return {
        ...state,
        position: action.payload
      }
    case CHANGE_SIZE_WEBSITE:
      return {
        ...state,
        size: action.payload
      }
    case TOGGLE_POPUP_EXPO_WINDOW:
      return {
        ...state,
        expoPopupStatus: action.payload
      }
    default:
      break
  }

  return state
}

