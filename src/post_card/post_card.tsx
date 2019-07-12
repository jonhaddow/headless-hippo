import React from 'react';
import { Link } from 'react-router-dom';
import PostModel from '../models/post';

interface PostCardProps {
	postModel: PostModel;
}

export default function PostCard(props: PostCardProps): JSX.Element {
	const innerEls: JSX.Element[] = [];
	const { postModel: { id, _embedded, title, slug } } = props;
	const image = _embedded["wp:featuredmedia"][0];

	if (image !== null) {
		innerEls.push(<img key={`post-image-${id}`} src={image.media_details.sizes.medium.source_url} alt={image.alt_text} />);
	}

	innerEls.push(<p key={`post-title-${id}`}>{title.rendered}</p>);

	const pathname = `/blog/${slug}`;

	return (
		<li>
			<Link
				to={pathname}
			>
				{innerEls}
			</Link>
		</li>
	);
}