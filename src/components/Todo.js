import React from 'react'
import PropTypes from 'prop-types'
import './App.css';

/*displays every todo, with corresponding style */
const Todo = ({ currentFilter, onClickTodo, onClickUrgent, onClickDelete, completed, urgent, deleted, text}) => {
    var urgent_text = urgent ? "Make Normal" : "Make Urgent"
    /* todo that is not completed*/
    if (!completed && !deleted) {
    return (
    <div className="todo-and-options">
        <li
        className="individual-todo"
        onClick={onClickTodo}
        style={{
            textDecoration : "none",
            /* styling of todo according to if its urgent or not */
            color :  urgent ? "red" : "black",
            fontWeight : urgent ? "bold" : "normal",
        }}>
            {text}
        </li>

        <div className="urgent-and-delete">
        <div 
        /* style of button deppeding on if it's already urgent or not */
        className="urgent" 
        onClick={onClickUrgent}
        style={{
            background: urgent ? "#D3D3D3" : "red",
            color: urgent ? "black" : "white",
        }}>
            <span> {urgent_text} </span>
        </div>

        <div 
        className="delete"
        onClick={onClickDelete}>
        <span> Delete </span>
        </div>

        </div>
    </div>
            )
        }
    /*todo that is completed (does not have urgent option)*/
    else if (completed && !deleted) {
        return (
        <div className="todo-and-options">
            <li
            className="individual-todo"
            onClick={onClickTodo}
            style={{
                textDecoration : completed ? "line-through" : "none",
                color : "black"
            }}>
                {text}
            </li>

            <div
            className="delete"
            onClick={onClickDelete}>
            <span> Delete </span>
            </div>

        </div>
        )
    }
    /*todo that is deleted*/
    else if (currentFilter === "SHOW_DELETED") {
        return (
        <div className="individual-todo">
            <li
            className="hoverWrapper"
            onClick={onClickTodo}
            style={{
                color :  "grey"
            }}>
                {text}
            </li> 
        </div>
        )
    }

    else {
        return(null)
    }

}

Todo.propTypes = {
    onClickTodo: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onClickUrgent: PropTypes.func.isRequired,
    urgent: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

export default Todo