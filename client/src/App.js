import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const debug = require('debug')('goaler:frontend');

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {users: []}
  
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    const App = isAuthenticated() ? <Dashboard logOut={this.logout.bind(this)} /> : <Landing logIn={this.login.bind(this)} />;
    return App;
  }
}

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div onClick={this.props.logIn}>Log In</div>
      </div>
    );
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.logOut}>
        Authorized
      </div>
    );
  }
}

export default App;
