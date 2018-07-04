import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import { Colors } from "../../Constants";

const code = `class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Wake Up", id: 1, done: false },
      { text: "Eat Breakfast", id: 2, done: false },
      // ...
    ]
  };

  toggleTodo = id => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
    this.setState({ todos });
  };

  render() {
    return (
      <ul style={{ marginTop: "20px", fontSize: "54px" }}>
        {this.state.todos.map(todo => (
          <li
            onClick={() => this.toggleTodo(todo.id)}
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }
}`;

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Wake Up", id: 1, done: false },
      { text: "Eat Breakfast", id: 2, done: false },
      { text: "Convert people into React", id: 3, done: false }
    ]
  };

  toggleTodo = id => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
    this.setState({ todos });
  };
  render() {
    return (
      <ul style={{ marginTop: "20px", fontSize: "54px" }}>
        {this.state.todos.map(todo => (
          <li
            onClick={() => this.toggleTodo(todo.id)}
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default class Slide2 extends React.Component {
  render() {
    const showDemo = true;
    return (
      <div className="flip-in-ver-right" style={{ width: "50vw" }}>
        <h1 style={{ fontSize: "64px", color: Colors.tomato }}>
          Immutable Data
        </h1>
        <div>
          {showDemo ? (
            <TodoList />
          ) : (
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {code}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    );
  }
}
