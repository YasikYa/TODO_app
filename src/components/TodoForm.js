import React from 'react';
import {TextInput} from './TextInput'
import { DateInput } from './DateInput';

export class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(event){
        this.props.submit(this.state);
        event.preventDefault();
    }

    handleInput(event){
        let value = event.target.value;
        const name = event.target.name;
        if(name == 'deadline'){
            value = Date.parse(value);
        }
        this.setState({[name]: value});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput inputName='title' labelText='TODO: ' onInput={this.handleInput}/>
                <TextInput inputName='description' labelText='Description' onInput={this.handleInput}/>
                <DateInput inputName='deadline' labelText='Deadline' onInput={this.handleInput}/>
                <button>Add</button>
            </form>
        );
    }
}