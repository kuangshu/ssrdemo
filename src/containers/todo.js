import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './actions';
import AddTodo from './components/addtodo';
import TodoList from './components/todolist';
class Todo extends Component {
  render() {
    const { actions, todo } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
              actions.addTodo(text)
            }
        />
        <TodoList
          todos={todo}
          onTodoClick={index => actions.completeTodo(index)}
        />
      </div>
      );
  }
}
Todo.propTypes = {
  actions: React.PropTypes.object.isRequired,
  todo: React.PropTypes.array.isRequired
};
// 声明 connect 连接
// mapStateToProps是一个函数，返回值表示的是需要merge进props的state
function mapStateToProps(state) {
  return {
    todo: state.todo
  };
}
// mapDispatchToProps负责返回一个 dispatchProps, dispatchProps 是actionCreator的key和
// dispatch(action)的组合。dispatchProps 看起来长这样：{add_todo: (text) => dispatch(action)}
// 但如果我有很多个Action，总不能手动一个一个加。Redux提供了一个方法叫 bindActionCreator。
// bindActionCreators 的作用就是将 Actions 和 dispatch 组合起来生成 mapDispatchToProps 需要生成的内容。
// 它看起来像这样：
// actions = { addTodo: (text) => {type: types.ADD_TODO,text}, completeTodo: (index) => {type: types.COMPLETE_TODO,index}}
function mapDispatchToProps(dispatch) {
  const boundTodo = bindActionCreators(TodoActions, dispatch);
  return {
    actions: Object.assign({}, boundTodo)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);