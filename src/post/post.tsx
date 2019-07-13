import React, { Component } from "react";
import { match } from "react-router-dom";
import PostModel from "../models/post";
import ApiRequest, { URLS } from "../models/api_request";
import { PostType } from "../posts/posts";

export interface PostParams {
	slug: string;
}

interface PostProps {
	match: match<PostParams>;
	postType: PostType;
}

interface PostState {
	postModel?: PostModel;
}

export default class Post extends Component<PostProps, PostState> {
	public constructor(props: PostProps) {
		super(props);

		this.state = {};

		this.initializeModel();
	}

	private async initializeModel(): Promise<void> {
		const { match: { params: { slug } }, postType} = this.props;

		const url = postType == PostType.Blog ? URLS.getBlog(slug) : URLS.getRecipe(slug);

		const postModel = await ApiRequest.fetch<PostModel[]>(url);
		this.setState({ postModel: postModel[0]});
	}

	public render(): JSX.Element {

		const { postModel } = this.state;

		if (postModel == null) return null;

		const { 
			title: { rendered: title }, 
			content: { rendered: content }
		} = postModel;

		return (
			<section>
				{title}

				{/* I trust this html rendered by wordpress */}
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		);
	}
}