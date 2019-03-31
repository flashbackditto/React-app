import React, {Component} from 'react';
import './App.css';



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myApiData: []
    };
  }

  componentDidMount() {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', {
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })

    .then((responseData) => {
      this.setState({myApiData: responseData}, () =>
      console.log(responseData)); // this is now calling the API and console logging effectively
  })

  }

  render() {
    const {myApiData} = this.state;
    return (
      <div>
         <h2>
            {myApiData} - Ron Swanson
         </h2>
      </div>

      // <div>
      //   <h1>Random Swanson Quote</h1>
      // </div>
    );
  }
};

export default MyComponent;

// My code seems v close, but I'm making a mistake in the fetch api call and it's returning undefined.

// It would appear that the fetch api method doesn't work exactly the same in React JS compared
// to vanilla OG classic JS
