import * as React from 'react';
import ApiRequest, { URLS } from '../models/api_request';

export default class Recipes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.initializeModel();

    this.state = {};
  }

  async initializeModel() {
    const response = await ApiRequest.fetch(URLS.getRecipes());

    this.setState({
      posts: response,
    });
  }

  render() {
    const { posts } = this.state;

    if (!posts) {
      return null;
    }

    const postEls = posts.map((x : any) => (
      <li key={x.id}>
        {/* eslint-disable-next-line no-underscore-dangle */}
        <img src={x._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt={x._embedded['wp:featuredmedia'][0].alt_text} />
        <p>{x.title.rendered}</p>
      </li>
    ));

    return (
      <div className="posts">
        <h1>Recipes</h1>
        <ul>
          {postEls}
        </ul>
      </div>
    );
  }
}