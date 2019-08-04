import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';

interface HeaderProps {
	title: string;
	description: string;
}

export default function Header(props: HeaderProps): JSX.Element {
	const { title, description } = props;
	return (
		<header className={styles.header}>
			<h1>
				<Link to='/'>{title}</Link>
			</h1>
			<p>{description}</p>
		</header>
	);
}