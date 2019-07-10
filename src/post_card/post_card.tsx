import React from 'react';
import PostModel from '../models/post';

export default function PostCard(props: PostModel): JSX.Element {
	const innerEls: JSX.Element[] = [];
	const { id, _embedded, title } = props;
	const image = _embedded["wp:featuredmedia"][0];

	if (image !== null) {
		innerEls.push(<img key={`post-image-${id}`} src={image.media_details.sizes.medium.source_url} alt={image.alt_text} />);
	}

	innerEls.push(<p key={`post-title-${id}`}>{title.rendered}</p>);
	
	return (<li>{innerEls}</li>);
}