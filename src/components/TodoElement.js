import React from "react";

export class TodoElement extends React.Component {
  daysToEnd() {
    return Math.round((this.props.action.deadline - Date.now()) / 1000 / 60 / 60 / 24);
  }

  render() {
    return (
      <div className="todo-element">
        <label>{this.props.action.title}</label>
        <label>Days to complete: {this.daysToEnd()}</label>
      </div>
    );
  }
}
