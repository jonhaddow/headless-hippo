import React, { Component } from "react";
import { hot } from "react-hot-loader";
import SiteModel from "./models/site_model";
import Header from "./header";
import Footer from "./footer";
import Media from "./models/media";

class App extends Component {
  constructor(props){
    super(props);

    this._initializeModel();
    this._initializeMediaModel();

    this.state = {};
  }

  render() {
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

  async _initializeMediaModel() {
    this.mediaModel = new Media();
    let json = await this.mediaModel.fetch()
  }
}

export default hot(module)(App);