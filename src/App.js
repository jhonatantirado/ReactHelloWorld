/* https://softwarecrafters.io/react/tutorial-react-js-introduccion/ */
import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "miguel", email: "test@miguelgomez.io"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a React</h2>
        </div>
        <div>
          <p><strong>Añade usuarios</strong></p>
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
          <UserList users={this.state.users}  />
        </div>
      </div>
    );
  }
}

export default App;