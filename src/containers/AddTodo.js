import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({dispatch}) => {
    let input

    return (
      <div>
      <form onSubmit={e => {
        /*prevents default*/
        e.preventDefault()
        /*removes whitespaces from sides */
        if (!input.value.trim()) {
          return
        }
        /*calls action with text user inputed*/
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="centered">
          <input ref={node => (input = node)} placeholder="Enter your Todo"/>
          <button type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
    )
  }
  
export default connect()(AddTodo)
