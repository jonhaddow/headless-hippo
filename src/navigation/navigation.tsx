import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.scss';

export default function Navigation(): JSX.Element {

	const listItems = [{
		name: 'Home',
		link: '/'
	}, {
		name: 'Blogs',
		link: '/blogs'
	}, {
		name: 'About',
		link: '/about'
	}, {
		name: 'Recipes',
		link: '/recipes'
	}].map((x): JSX.Element => {
		return(
			<li key={x.name}>
				<NavLink exact activeClassName={styles.active} to={x.link}>
					{x.name}
				</NavLink>
			</li>
		);
	});

	return (
		<nav className={styles.mainNav}>
			<ul>
				{listItems}
			</ul>
		</nav>
	);
}
