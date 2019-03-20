import React, { Component} from "react";
import {hot} from "react-hot-loader";
import SiteModel from "./models/site_model.js";
import Header from "./header.js";
import Footer from "./footer.js";

class App extends Component{
  constructor(props){
    super(props);

    this._initializeModel();
    this.state = {};
  }

  render(){
    return(
      <div className="main-container">
        <Header
          title={this.state.siteTitle}
          description={this.state.siteDescription}
          url={this.state.siteUrl} />
        <Footer 
          title={this.state.siteTitle} />
      </div>
    );
  }

  async _initializeModel() {
    this.model = new SiteModel();
    let json = await this.model.fetch()
    
    this.setState({
      siteTitle: json.name,
      siteDescription: json.description,
      siteUrl: json.url
    });
  }
}

export default hot(module)(App);