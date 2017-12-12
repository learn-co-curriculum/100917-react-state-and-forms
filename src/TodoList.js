import React from 'react';

class TodoList extends React.Component {
  render() {
    console.log('TodoList renders');
    const todoList = this.props.todos.map((todo, i) => (
      <li key={i}>
        <h3>{todo.task}</h3>
        <p>Priority: {todo.priority}</p>
      </li>
    ));
    return <ul>{todoList}</ul>;
  }
}

export default TodoList;
