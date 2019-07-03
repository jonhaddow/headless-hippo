import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';

interface Post {
	id: number;
	title: {
		rendered: string;
	};
	_embedded: {
		["wp:featuredmedia"]: {
			alt_text: string;
			media_details: {
				sizes: {
					medium: {
						source_url: string;
					};
				};
			};
		}[];
	};
}

class PostsState {
	public posts: Post[];
}

export default class Posts extends Component<{}, PostsState> {
	public constructor(props: {}) {
		super(props);

		this.initializeModel();

		this.state = new PostsState();
	}

	private async initializeModel(): Promise<void> {
		const response = await ApiRequest.fetch<Post[]>(URLS.getPosts())

		this.setState({
			posts: response
		});
	}

	public render(): JSX.Element {
		const { posts } = this.state;

		if (!posts) {
			return null;
		}
		
		const postEls = posts.map((post): JSX.Element => {
			const innerEls: JSX.Element[] = [];

			const image = post._embedded["wp:featuredmedia"][0];
			if (image !== null) {
				innerEls.push(<img key={`img-${post.id}`} src={image.media_details.sizes.medium.source_url} alt={image.alt_text} />);
			}

			innerEls.push(<p key={`title-${post.id}`}>{post.title.rendered}</p>);
			
			return (<li key={post.id}>{innerEls}</li>);
		});

		return(
			<div className="posts">
				<h1>Posts</h1>
				<ul>{postEls}</ul>
			</div>
		);
	}
}