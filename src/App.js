import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItem from "./ListItem";
import axios from "axios";
import loadingGif from "./loading.gif";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      editting: false,
      edittingIndex: null,
      notification: null,
      todos: [],
      loading: true
    };
    this.URL = "https://5b795187fb11c8001453624a.mockapi.io";
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(`${this.URL}/todos`);
    this.setState({
      todos: response.data,
      loading: false
    });
  }

  handleOnchange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  async addTodo() {
    const response = await axios.post(`${this.URL}/todos`, {
      name: this.state.newTodo
    });

    const todos = this.state.todos;
    todos.push(response.data);
    this.setState({
      todos,
      newTodo: ""
    });
    this.alert("Add successfully.");
  }

  async updateTodo() {
    const todo = this.state.todos[this.state.edittingIndex];

    const response = await axios.put(`${this.URL}/todos/${todo.id}`, {
      name: this.state.newTodo
    });

    const todos = this.state.todos;
    todos[this.state.edittingIndex] = response.data;
    this.setState({
      todos,
      editting: false,
      edittingIndex: null,
      newTodo: ""
    });
    this.alert("Update successfully.");
  }

  editTodo = index => {
    const todo = this.state.todos[index];
    this.setState({
      editting: true,
      edittingIndex: index,
      newTodo: todo.name
    });
    this.alert("Edit successfully.");
  };

  async deleteTodo(index) {
    const todos = this.state.todos;
    const todo = todos[index];
    await axios.delete(`${this.URL}/todos/${todo.id}`);
    delete todos[index];
    this.setState({
      todos
    });
    this.alert("Delete successfully.");
  }

  alert = notification => {
    this.setState({
      notification
    });

    setTimeout(() => {
      this.setState({
        notification: null
      });
    }, 2000);
  };

  render() {
    console.log(this.state.newTodo);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Qui Dep Trai</h1>
        </header>
        <div className="container">
          {this.state.notification && (
            <div className="alert mt-3 alert-success">
              {this.state.notification}
            </div>
          )}

          <input
            type="text"
            className="my-4 form-control"
            placeholder="New Todo App"
            onChange={this.handleOnchange}
            value={this.state.newTodo}
          />

          <button
            onClick={this.state.editting ? this.updateTodo : this.addTodo}
            className="btn-success mb-3 form-control"
            disabled={this.state.newTodo < 5}
          >
            {this.state.editting ? "Update Todo" : "Add Todo"}
          </button>
          {this.state.loading && <img src={loadingGif} alt="" />}

          {(!this.state.editting || this.state.loading) && (
            <ul className="list-group">
              {this.state.todos.map((item, index) => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    deleteTodo={() => {
                      this.deleteTodo(index);
                    }}
                    editTodo={() => {
                      this.editTodo(index);
                    }}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
