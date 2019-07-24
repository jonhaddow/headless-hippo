import React, { Component, CSSProperties } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
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
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${post.image}")`
			};
			const link = `/blog/${post.slug}`;
			return(
				<li 
					key={post.slug} 
					style={style} 
					className={`${styles.sliderListItem} ${post.active ? styles.activeSliderItem : '' }`}
				>
					<h2>
						<Link to={link} className={styles.postTitleLink}>{post.title}</Link>
					</h2>
					<Link to={link} className={styles.postReadMoreLink}>Read More</Link>
					<time className={styles.postDate}>1st April 2019</time>
				</li>
			)
		});
		
		return(
			<div className={styles.sliderWrapper}>
				<button type='button' className={`${styles.navButton} ${styles.prevButton}`}><FontAwesomeIcon icon={faChevronLeft} size='3x' /></button>
				
				<ul className={styles.sliderList}>
					{sliderItems}
				</ul>
				
				<button type='button' className={`${styles.navButton} ${styles.nextButton}`}><FontAwesomeIcon icon={faChevronRight} size='3x' /></button>
			</div>
		);
	}
}