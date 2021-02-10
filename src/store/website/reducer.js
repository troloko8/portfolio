import { CHANGE_WEBSITE_VISIBLE } from './actions'
import { CHANGE_WEBSITE_DATA } from './actions'
import { CALC_CURRENT_ITEM_POSITION } from './actions'
import { CHANGE_SIZE_WEBSITE } from './actions'

let websiteStatus = {
  websiteStatus: false,
  img: null,
  name: '',
  link: '',
  linkGit: '',
  technology: [],
  description: '',
  position: {
    x: 0,
    y: 0
  },
  size: {
    w: '200px',
    h: '130px'
  }
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
    default:
      break
  }

  return state
}

