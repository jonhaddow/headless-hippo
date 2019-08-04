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

	const listItemStyling: React.CSSProperties = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${image.media_details.sizes.medium.source_url}")`
	};
	
	return (
		<li 
			className={Styles.postCard}
			style={listItemStyling}
		>
			<Link
				to={pathname}
			>
				<span className={Styles.title}>{title.rendered}</span>
				<time className={Styles.date}>{date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})}</time>
			</Link>
		</li>
	);
}