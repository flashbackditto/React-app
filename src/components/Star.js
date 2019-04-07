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
        <input name="myrating" type="radio" value="5" /><span>☆</span><input name="myrating" type="radio" value="4" /><span>☆</span><input name="myrating" type="radio" value="3" /><span>☆</span><input name="myrating" type="radio" value="2" /><span>☆</span><input name="myrating" type="radio" value="1" /><span>☆</span>
      </div>
    );
  }
}

export default Star;
