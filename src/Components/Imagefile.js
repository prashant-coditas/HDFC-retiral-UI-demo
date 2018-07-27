import React, { Component } from 'react';
import './Imagefile.css';
import axios from 'axios';

class Imagefile extends Component {

  render() {
    return (
      <div >
      {console.log(this.props.imageURL)}
     <img src={this.props.imageURL}/>
     <p>images</p>
      </div>
    );
  }
}

export default Imagefile;
