import * as React from 'react';
import * as ApiRequest from "../models/api_request";
import Header from "../header/header";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";

class App extends React.Component<any, any> {
  constructor(props : {}){
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
    const json = await ApiRequest.default.fetch(ApiRequest.URLS.getSiteDetails())
    
    this.setState({
      siteTitle: json.name,
      siteDescription: json.description,
      siteUrl: json.url
    });
  }
}

export default App;