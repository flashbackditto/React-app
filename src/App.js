import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myApiData: []
    };
  }

  componentDidMount() {
    fetch('https://example.api.com')
    .then(response => response.json())
    .then(data => this.setState({myApiData: data});
  }

  render() {
    // rendering stuff here
  }
}

export default App;
