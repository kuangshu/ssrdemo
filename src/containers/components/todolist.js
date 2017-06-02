import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import Todoitem from './todoitem';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
            <Todoitem
              {...todo}
              onTodoClick={() => this.props.actions.completeTodo(index)}
              key={index}
            />
          )
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};


function getVisibleTodo(todos, filter) {
  console.log(todos, filter);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

function mapStateToProps(state, props) {
  return {
    todos: getVisibleTodo(props.todos, state.filter)
  };
}
function mapDispatchToProps(dispatch) {
  const boundTodo = bindActionCreators(TodoActions, dispatch);
  return {
    actions: Object.assign({}, boundTodo)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);