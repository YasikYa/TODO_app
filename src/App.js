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
  }

  addAction(action){
    this.setState(state => (
      {
        actions: [...state.actions, action]
      }
    ))
  }

   render(){
    return (
      <div className="App container">
        <div>
          <TodoForm submit={this.addAction}/>
        </div>
        <div>
           <TodoList todoList={this.state.actions}/>
        </div>
      </div>
    );
   }
}

export default App;
