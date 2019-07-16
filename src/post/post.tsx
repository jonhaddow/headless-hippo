import React, { Component } from "react";
import { match } from "react-router-dom";
import PostModel from "../models/post";
import ApiRequest from "../models/api_request";

export interface PostParams {
	slug: string;
}

interface PostProps {
	match: match<PostParams>;
}

interface PostState {
	postModel?: PostModel;
}

export default abstract class Post extends Component<PostProps, PostState> {

	public constructor(props: PostProps) {
		super(props);

		this.state = {};

		this.initializeModel();
	}

	abstract getUrl(): string;

	private async initializeModel(): Promise<void> {
		const postModel = await ApiRequest.fetch<PostModel[]>(this.getUrl());
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
				<h1>{title}</h1>

				{/* I trust this html rendered by wordpress */}
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		);
	}
}