import React, { Component } from 'react';

import axios from 'axios';
import Imagefile from './../Components/Imagefile';
import Title from './../Components/Title';
import Description from './../Components/Description';
import Card from './../Components/Card';
 
const config =require('../Components/config');

const data = require('../Components/datasample.json');

class Home extends Component {
	constructor(props)
	{
		super(props);
		this.state={
		configurations:config
		}
   
		console.log(this.state.configurations.HOMEPAGES_CONFIG[0].widgets[0].type);
  }

  render() {
    let temp;
    switch(this.state.configurations.HOMEPAGES_CONFIG[0].widgets[0].type){
      case "article_list_widget_static":
            temp= <Card/>
      break;
      }
    return (
      <div >
      <Imagefile imageURL={this.state.configurations.THEME_SETTINGS.logoImageURL}/>
      <Title/>
      {temp}
      </div>
    );
  }
}

export default Home;