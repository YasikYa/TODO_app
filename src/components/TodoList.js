import React from 'react';
import {TodoElement} from './TodoElement'

export class TodoList extends React.Component{
    render(){
        let currentTodo = this.props.todoList.length == 0?
            <h1>All DONE!</h1>
            : this.props.todoList.map(todo =>{
                return <TodoElement action={todo}/>
            });
        return (
            <div className="todo-container">
                {currentTodo}
            </div>
        );
    }
}