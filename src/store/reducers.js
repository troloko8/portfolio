import { combineReducers } from 'redux'

import { websiteReducer } from './website/reducer'
import { headerReducer } from './header/reducer'
import { contactsReducer } from './contacts/reducer';
import { wrapperReducer } from './wrapper/reducer'

export default combineReducers({
  webSite: websiteReducer,
  header: headerReducer,
  contacts: contactsReducer,
  wrapper: wrapperReducer
});