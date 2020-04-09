import React from 'react'
import trash from '../icon.png'

export class DeleteButton extends React.Component{
    render(){
        return (
            <button onClick={this.props.delete} className="delete-button"><img src={trash}></img></button>
        );
    }
}