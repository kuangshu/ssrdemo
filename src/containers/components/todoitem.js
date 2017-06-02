import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { onTodoClick, completed, text } = this.props;
    return (
      <li
        onClick={onTodoClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: completed ? 'default' : 'pointer'
        }}
      >
        {text}
      </li>
    );
  }
}

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};