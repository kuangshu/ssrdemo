import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';

class AddTodo extends Component {
  handleClick = () => {
    const inputNode = findDOMNode(this.input);
    const text = inputNode.value.trim();
    this.props.actions.addTodo(text);
    inputNode.value = '';
  }
  render() {
    return (
      <div>
        <input type="text" ref={(c) => { this.input = c; }} />
        <button onClick={e => this.handleClick(e)}>
          Addasdsadad
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  const boundTodo = bindActionCreators(TodoActions, dispatch);
  return {
    actions: Object.assign({}, boundTodo)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);