import React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

/*App returns the whole structure */
const App = () => {
    return(
    <div>
      <div className="App-header">
      <h1>Todo Agenda</h1>
      </div>
          < AddTodo />
        <div className="list-todos">
          < VisibleTodoList />
        </div>
          < Footer />
        </div>      
    );
  }
  
export default App;
