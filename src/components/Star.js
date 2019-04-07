import React, { Component } from 'react';

class Star extends Component {

  constructor(props){
    super(props);
    this.state = {star: this.props.star};
  }

  handleClick(starValue){
    this.setState({star:starValue});

  }

  render() {
    return (
      <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    );
  }
}

export default Star;
