import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

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
			<li key={x.name} className={styles.navListItem}>
				<NavLink exact activeClassName={styles.active} to={x.link} className={styles.navItem}>
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
