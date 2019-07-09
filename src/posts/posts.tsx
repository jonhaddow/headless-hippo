import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';
import PostModel from '../models/post';
import PostCard from '../post_card/post_card';

class PostsState {
	public posts: PostModel[];
}

export default class Posts extends Component<{}, PostsState> {
	public constructor(props: {}) {
		super(props);

		this.initializeModel();

		this.state = new PostsState();
	}

	private async initializeModel(): Promise<void> {
		const response = await ApiRequest.fetch<PostModel[]>(URLS.getPosts())

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
			return (<PostCard key={post.id} {...post} />);
		});

		return (
			<div className="posts">
				<h1>Posts</h1>
				<ul>{postEls}</ul>
			</div>
		);
	}
}