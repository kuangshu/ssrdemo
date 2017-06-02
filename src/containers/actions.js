export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}
export function completeTodo(index) {
  return {
    type: 'COMPLETE_TODO',
    index
  };
}
export function setvisibilityfilter(filter) {
  return {
    filter,
    type: 'SET_VISIBILITY_FILTER',
  };
}