import React from 'react';
import { Link } from 'react-router-dom';
import PostModel from '../models/post';
import Styles from './post_card.scss';

interface PostCardProps {
	postModel: PostModel;
	linkUrl: (slug: string) => string;
}

export default function PostCard(props: PostCardProps): JSX.Element {
	const innerEls: JSX.Element[] = [];
	const { postModel, postModel: { id, _embedded, title, slug }, linkUrl } = props;
	const image = _embedded["wp:featuredmedia"][0];

	innerEls.push(<p key={`post-title-${id}`}>{title.rendered}</p>);

	const pathname = linkUrl(slug);

	const date = new Date(postModel.date);
	
	return (
		<li 
			className={Styles.postCard}
		>
			<Link
				to={pathname}
			>
				<img src={image.media_details.sizes.medium.source_url} alt='' />
				
				<div className={Styles.details}>
					<span className={Styles.title}>{title.rendered}</span>
					<time className={Styles.date}>{date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})}</time>
				</div>
			</Link>
		</li>
	);
}