import React from 'react';

export class TextInput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="form-element input-field col s12">
                <label htmlFor={this.props.inputName}>
                    {this.props.labelText} 
                </label>
                <input className="validate" name={this.props.inputName} onChange={this.props.onInput}></input>
            </div>
        );
    }
}