import React, { Component } from "react";
import ApiRequest, { URLS } from '../../models/api_request';

interface RecentPost {
	slug: string;
	type: string;
	title: string;
}

export default class Slider extends Component<{}, { recentPosts: RecentPost[] }> {
	public constructor(props: {}) {
		super(props);

		this.state = { recentPosts: [] };

		this.initializeModel();
	}

	private async initializeModel(): Promise<void> {
		const recentPosts = await ApiRequest.fetch<RecentPost[]>(URLS.getRecentPosts());
		this.setState({
			recentPosts: recentPosts
		});
	}

	public render(): JSX.Element {

		const { recentPosts } = this.state;

		if (recentPosts == null) return null;
		
		const sliderItems = recentPosts.map((post): JSX.Element => {
			return(
				<li key={post.slug}>
					<span className='title'>{post.title}</span>
				</li>
			)
		});
		
		return(
			<div className='slider'>
				<ul>
					{sliderItems}
				</ul>
			</div>
		);
	}
}