import React from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const todoList = [
  
]

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      actions: []
    };
    this.addAction = this.addAction.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
  }

  addAction(action){
    this.setState(state => (
      {
        actions: [...state.actions, action]
      }
    ))
  }

  deleteAction(title){
    this.setState(state => ({
      actions: state.actions.filter(a => a.title != title)
    }))
  }

   render(){
    return (
      <div className="App container">
        <div>
          <TodoForm submit={this.addAction}/>
        </div>
        <div>
           <TodoList delete={this.deleteAction} todoList={this.state.actions}/>
        </div>
      </div>
    );
   }
}

export default App;
