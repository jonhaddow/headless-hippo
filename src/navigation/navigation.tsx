import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

export default function Navigation(): JSX.Element {

	const listItems = [{
		name: 'About',
		link: '/about'
	}, {
		name: 'Blogs',
		link: '/blogs'
	}, {
		name: 'Recipes',
		link: '/recipes'
	}].map((x): JSX.Element => {
		return(
			<li key={x.name} className={styles.navListItem}>
				<NavLink to={x.link} className={styles.navItem}>
					{x.name}
				</NavLink>
			</li>
		);
	});

	return (
		<nav>
			<ul className={styles.mainNav}>
				{listItems}
			</ul>
		</nav>
	);
}
