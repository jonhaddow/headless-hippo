import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';
import PostModel from '../models/post';
import PostCard from '../post_card/post_card';

class PostsState {
	public posts: PostModel[];
}

export enum PostType {
	Recipe,
	Blog
}

export default class Posts extends Component<{ postType: PostType }, PostsState> {
	public constructor(props: { postType: PostType }) {
		super(props);

		this.initializeModel(props.postType);

		this.state = new PostsState();
	}

	private async initializeModel(postType: PostType): Promise<void> {

		let url: string;
		if (postType === PostType.Recipe) {
			url = URLS.getRecipes();
		} else {
			url = URLS.getPosts();
		}

		const response = await ApiRequest.fetch<PostModel[]>(url)

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

		const { postType } = this.props;
		const title = postType == PostType.Blog ? 'Posts' : 'Recipes'

		return (
			<div className="posts">
				<h1>{title}</h1>
				<ul>{postEls}</ul>
			</div>
		);
	}
}