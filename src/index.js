import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let id = 0;
const Todo = props => (
  <ul>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <span>{props.todo.text}</span>
    <button onClick={props.onDelete}>delete</button>
  </ul>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const text = prompt("enter the text");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Todo</h1>
        <div>todo count : {this.state.todos.length}</div>
        <div>
          unchecked todo count:
          {this.state.todos.filter(todo => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}>addme</button>
        <div>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
