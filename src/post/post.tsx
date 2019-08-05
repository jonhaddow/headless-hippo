import React, { Component } from "react";
import { match } from "react-router-dom";
import PostModel from "../models/post";
import ApiRequest, { URLS } from "../models/api_request";
import MediaModel from '../models/media';
import Styling from './post.scss';

export interface PostParams {
	slug: string;
}

interface PostProps {
	match: match<PostParams>;
}

interface PostState {
	postModel?: PostModel;
	mediaModel?: MediaModel;
}

export default abstract class Post extends Component<PostProps, PostState> {

	public constructor(props: PostProps) {
		super(props);

		this.state = {};

		this.initializeModels();
	}

	abstract getUrl(): string;

	private async initializeModels(): Promise<void> {
		const postModel = await ApiRequest.fetch<PostModel[]>(this.getUrl());
		const mediaModel = await ApiRequest.fetch<MediaModel>(URLS.getMediaItem(postModel[0].featured_media));
		this.setState({
			postModel: postModel[0],
			mediaModel: mediaModel
		});
	}

	public render(): JSX.Element {

		const { postModel, mediaModel } = this.state;

		if (postModel == null) return null;

		const { 
			title: { rendered: title }, 
			content: { rendered: content }
		} = postModel;

		return (
			<section>
				<article className={Styling.post}>
					<img src={mediaModel.media_details.sizes.large.source_url} alt={mediaModel.alt_text} />
					<h1>{title}</h1>

					{/* I trust this html rendered by wordpress */}
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</article>
			</section>
		);
	}
}