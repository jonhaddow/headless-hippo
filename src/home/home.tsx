import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider/slider';
import './home.css';

export default function Home(): JSX.Element {
	return (
		<section>
			<Slider />
			
			<Link to='/blogs' className='blogs'>Blogs</Link>
			<Link to='/about' className='about'>About</Link>
			<Link to='/recipes' className='recipes'>Recipes</Link>
		</section>
	);
}