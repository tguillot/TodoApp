import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters} from '../actions'
import { toggleTodo, makeUrgent, deleteTodo } from '../actions'

/* filters todos depending on filter options, returns todos array filtered*/
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter (t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter (t => !t.completed)
        case VisibilityFilters.SHOW_DELETED:
            return todos.filter (t => t.deleted)
        default:
            throw new Error ("Unknown filter: " + filter)
    }
}

/* recieves state with todos and filter type,
returns filtered todos using function getVisibleTodos */
const mapStateToProps = state => ({
    todos: getVisibleTodos (state.todos,state.visibilityFilter),
    currentFilter: (state.visibilityFilter)
})

/* trigger state change with dispatch */
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    makeUrgent: id => dispatch(makeUrgent(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

/*to be able to import from other files and conects to TodoList component */
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)