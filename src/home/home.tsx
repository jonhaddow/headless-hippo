import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider/slider';
import Styles from './home.scss';

import BlogsImage from '../assets/img/dog-and-baby.jpg';
import AboutImage from '../assets/img/about-portrait.jpg';
import RecipesImage from '../assets/img/recipes-strawberries.jpg';

export default function Home(): JSX.Element {
	const itemDetails = [{
		link: '/blogs',
		imageSrc: BlogsImage,
		title: 'Blogs'
	}, {
		link: '/about',
		imageSrc: AboutImage,
		title: 'About'
	}, {
		link: '/recipes',
		imageSrc: RecipesImage,
		title: 'Recipes'
	}];

	const links = itemDetails.map((link): JSX.Element => {
		const style: React.CSSProperties = {
			backgroundImage: `url(${link.imageSrc})`
		};
		return (
			<li style={style}>
				<Link to={link.link}>{link.title}</Link>
			</li>
		);
	});

	return (
		<section className={Styles.home}>
			<Slider />
			
			<ul>
				{links}
			</ul>
		</section>
	);
}