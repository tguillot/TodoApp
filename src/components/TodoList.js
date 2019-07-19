import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

/*recieves todos and the actions for each one*/ 
const TodoList = ({ todos, currentFilter, toggleTodo, makeUrgent, deleteTodo}) => (
    <ul>
        {todos.map(todo => (
            <Todo 
            key={todo.id}
            currentFilter={currentFilter}
            {...todo} 
            onClickTodo={() => (toggleTodo(todo.id))} 
            onClickUrgent={() => (makeUrgent(todo.id))}
            onClickDelete={() => (deleteTodo(todo.id))} 
            />
        ))}
    </ul>
)


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  makeUrgent: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList