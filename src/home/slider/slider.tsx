import React, { Component, CSSProperties } from "react";
import ApiRequest, { URLS } from '../../models/api_request';
import styles from './slider.css';

interface RecentPost {
	slug: string;
	type: string;
	title: string;
	image: string;
	active: boolean;
}

export default class Slider extends Component<{}, { recentPosts: RecentPost[] }> {
	private sliderTimer: NodeJS.Timer;

	public constructor(props: {}) {
		super(props);

		this.state = { recentPosts: [] };
	}

	public async componentDidMount(): Promise<void> {
		await this.initializeModel();
		this.setupSliderTimer();
	}

	public componentWillUnmount(): void {
		clearInterval(this.sliderTimer);
	}
	
	private setupSliderTimer(): void {
		this.sliderTimer = setInterval((): void => {
			const { recentPosts } = this.state;
			const currentIndex = recentPosts.findIndex((post): boolean => post.active);

			let nextIndex = currentIndex + 1;
			if (nextIndex == recentPosts.length) nextIndex = 0; 
	
			recentPosts.forEach((post, index): void => {
				post.active = index === nextIndex;
			});
	
			this.setState({
				recentPosts: recentPosts
			});
		}, 4000);
	}

	private async initializeModel(): Promise<void> {
		const recentPosts = await ApiRequest.fetch<RecentPost[]>(URLS.getRecentPosts());

		recentPosts[0].active = true;
		
		this.setState({
			recentPosts: recentPosts
		});
	}

	public render(): JSX.Element {

		const { recentPosts } = this.state;

		if (recentPosts == null || recentPosts.length === 0) return null;

		const sliderItems = recentPosts.map((post): JSX.Element => {
			const style: CSSProperties = {
				backgroundImage: `url("${post.image}")`
			};
			return(
				<li 
					key={post.slug} 
					style={style} 
					className={`${styles.sliderListItem} ${post.active ? styles.activeSliderItem : '' }`}
				>
					<span className={styles.postTitle}>{post.title}</span>
				</li>
			)
		});
		
		return(
			<div className={styles.sliderWrapper}>
				<ul className={styles.sliderList}>
					{sliderItems}
				</ul>
			</div>
		);
	}
}