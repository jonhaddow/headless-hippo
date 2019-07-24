import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider/slider';
import styles from './home.css';

export default function Home(): JSX.Element {
	return (
		<section>
			<Slider />
			
			<ul>
				<li>
					<Link to='/blogs' className={styles.blogs}>Blogs</Link>
				</li>
				<li>
					<Link to='/about' className={styles.about}>About</Link>
				</li>
				<li>
					<Link to='/recipes' className={styles.recipes}>Recipes</Link>
				</li>
			</ul>
		</section>
	);
}