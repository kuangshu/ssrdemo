const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.slice(0).concat({
        text: action.text,
        completed: false
      });
    case 'COMPLETE_TODO':
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};
const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
const rootReducer = {
    todo,
    filter,
};
export default rootReducer;