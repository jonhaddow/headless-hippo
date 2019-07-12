import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';
import PostModel from '../models/post';
import PostCard from '../post_card/post_card';

export enum PostType {
	Recipe,
	Blog
}

interface PostsState {
	posts: PostModel[];
}

interface PostsProps {
	postType: PostType;
}

export default class Posts extends Component<PostsProps, PostsState> {
	public constructor(props: PostsProps) {
		super(props);

		this.initializeModel(props.postType);

		this.state = {
			posts: []
		};
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
			return (<PostCard key={post.id} postModel={post} />);
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