import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation(): JSX.Element {
	return (
		<nav>
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/about'>About</NavLink></li>
				<li><NavLink to='/blogs'>Blogs</NavLink></li>
				<li><NavLink to='/recipes'>Recipes</NavLink></li>
			</ul>
		</nav>
	);
}
