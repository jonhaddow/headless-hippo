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
	const { postModel: { id, _embedded, title, slug }, linkUrl } = props;
	const image = _embedded["wp:featuredmedia"][0];

	innerEls.push(<p key={`post-title-${id}`}>{title.rendered}</p>);

	const pathname = linkUrl(slug);

	const listItemStyle: React.CSSProperties = {
		backgroundImage: `url("${(image !== null) ? image.media_details.sizes.medium.source_url : ''}"`
	};

	return (
		<li 
			className={Styles.postCard}
			style={listItemStyle}
		>
			<Link
				to={pathname}
			>
				{innerEls}
			</Link>
		</li>
	);
}