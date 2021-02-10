import { combineReducers } from 'redux'

import { websiteReducer } from './website/reducer'
import { headerReducer } from './header/reducer'

export default combineReducers({
  webSite: websiteReducer,
  header: headerReducer
});