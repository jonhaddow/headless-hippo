import React from 'react';
import PostModel from '../models/post';

export default function PostCard(props: PostModel): JSX.Element {
	const innerEls: JSX.Element[] = [];
	const { _embedded, title } = props;
	const image = _embedded["wp:featuredmedia"][0];

	if (image !== null) {
		innerEls.push(<img src={image.media_details.sizes.medium.source_url} alt={image.alt_text} />);
	}

	innerEls.push(<p>{title.rendered}</p>);
	
	return (<li>{innerEls}</li>);
}