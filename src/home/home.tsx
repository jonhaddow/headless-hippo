import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider/slider';
import styles from './home.css';

export default function Home(): JSX.Element {
	return (
		<section>
			<Slider />
			
			<Link to='/blogs' className={styles.blogs}>Blogs</Link>
			<Link to='/about' className={styles.about}>About</Link>
			<Link to='/recipes' className={styles.recipes}>Recipes</Link>
		</section>
	);
}