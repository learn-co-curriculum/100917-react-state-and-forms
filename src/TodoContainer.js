import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { task: 'shovel some snow', priority: 'medium' },
        { task: 'salt the steps', priority: 'high' }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    const newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos });
  }

  render() {
    console.log('TodoContainer renders');
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
