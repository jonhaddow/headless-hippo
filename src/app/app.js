import React, { Component } from "react";
import { hot } from "react-hot-loader";
import SiteModel from "../models/site-model";
import Header from "../header/header";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";

class App extends Component {
  constructor(props){
    super(props);
    
    this._initializeModel();

    this.state = {};
  }

  render() {
    return(
      <div className="main-container">
        <Header
          title={this.state.siteTitle}
          description={this.state.siteDescription}
          url={this.state.siteUrl} />
        <Navigation />
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