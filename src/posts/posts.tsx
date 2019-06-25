import * as React from 'react';
import ApiRequest, { URLS } from '../models/api_request';

export default class Posts extends React.Component<any, any> {
	constructor(props : {}) {
		super(props);

		this.initializeModel();

		this.state = {};
	}

	render(){
		let posts = this.state.posts;

		if (!posts) {
			return null;
		}
		
		const postEls = posts.map((x : any) => {
			return (
				<li key={x.id} >
					<img src={x._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}></img>
					<p>{x.title.rendered}</p>
				</li>
			);
		});

		return(
			<div className="posts">
				<h1>Posts</h1>
				{postEls}
			</div>
		);
	}

	async initializeModel(){
		var response = await ApiRequest.fetch(URLS.getPosts())

		this.setState({
			posts: response
		});
	}
}