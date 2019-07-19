/* defines action addTodo, has id and text */
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

/* defines action of setting visibility filter, has filter*/
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER', 
  filter
})

/* defines action of toggling a todo, contains id of todo targeted*/
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

/* defines action of making urgent, contains id of todo targeted*/
export const makeUrgent = id => ({
  type: 'MAKE_URGENT',
  id
})

/* defines actions of delete todo, contains id of todo targeted*/
export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
})

/* deifnes all types of visibility filters*/
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_DELETED: 'SHOW_DELETED'
}