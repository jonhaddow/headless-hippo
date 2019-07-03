import React from 'react';
import './header.css';

interface HeaderProps {
	url: string;
	title: string;
	description: string;
}

export default function(props: HeaderProps): JSX.Element {
	const { url, title, description } = props;
	return (
		<header className="page-header">
			<a href={url}><h1>{title}</h1></a>
			<p>{description}</p>
		</header>
	);
}