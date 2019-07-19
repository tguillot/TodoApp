/* reducer todo object returned for each type of action
returns new state with the modified todo*/
const todos = (state = [], action) => {
    switch (action.type) {
      /*for add todo, creats a new object with the following defaults and the user input*/
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
            urgent: false,
            deleted: false,
          }
        ]
      /*for toggle tood, sets the todo completed as the opposite value*/
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      /*for make urgent, sets the urgent boolean to the opposite value */
      case 'MAKE_URGENT':
          return state.map(todo =>
            (todo.id === action.id)
              ? {...todo, urgent: !todo.urgent}
              : todo
          )
      /*for the delete todo sets the deleted boolean to the opposite value*/
      case "DELETE_TODO":
          return state.map(todo =>
            (todo.id === action.id)
              ? {...todo, deleted: !todo.deleted}
              : todo
          )
      default:
        return state
    }
  }
  
  export default todos
  