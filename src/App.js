import React, {Component} from 'react';
import './App.css';
import ToDos from './components/ToDos';
import Headers from './components/Headers';
import Button from './components/Button';
import ApiCall from './components/ApiCall';

class MyComponent extends React.Component {


  render() {
    return (
      <div class = "app">
         <Headers />
         <ApiCall />
         <ToDos />
         <Button />
         <Button />
      </div>
    );
  }
};

export default MyComponent;

// My code seems v close, but I'm making a mistake in the fetch api call and it's returning undefined.

// It would appear that the fetch api method doesn't work exactly the same in React JS compared
// to vanilla OG classic JS
