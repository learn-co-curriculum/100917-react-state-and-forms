import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: '',
      priority: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ task: '', priority: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.task}
            name="task"
            type="text"
            placeholder="Enter task name..."
          />
          <input
            onChange={this.handleChange}
            value={this.state.priority}
            name="priority"
            type="text"
            placeholder="Priority"
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
