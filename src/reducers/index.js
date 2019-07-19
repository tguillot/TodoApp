import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/* combines the two reducers into a combined reducer */
export default combineReducers({
  todos,
  visibilityFilter
})
