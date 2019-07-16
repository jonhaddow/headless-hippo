import React, { Component } from 'react';
import ApiRequest from '../models/api_request';
import PostModel from '../models/post';
import PostCard from '../post_card/post_card';

interface PostsState {
	posts: PostModel[];
}

export default abstract class Posts extends Component<{}, PostsState> {
	public constructor(props: {}) {
		super(props);

		this.initializeModel();

		this.state = {
			posts: []
		};
	}

	abstract getLinkUrl(slug: string): string;

	abstract getTitle(): string;

	abstract getUrl(): string;

	private async initializeModel(): Promise<void> {
		const response = await ApiRequest.fetch<PostModel[]>(this.getUrl())
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
			return (<PostCard key={post.id} postModel={post} linkUrl={this.getLinkUrl} />);
		});

		const title = this.getTitle();

		return (
			<div className="posts">
				<h1>{title}</h1>
				<ul>{postEls}</ul>
			</div>
		);
	}
}