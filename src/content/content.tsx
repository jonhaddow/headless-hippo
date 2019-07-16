import { Switch, Route } from "react-router-dom";
import React from 'react';
import Home from "../home/home";
import About from '../about/about';
import Blogs from '../posts/blogs';
import Recipes from '../posts/recipes';
import Blog from '../post/blog';
import Recipe from '../post/recipe';

export default function Content(): JSX.Element {	
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/about' component={About} />
			<Route path='/blogs' component={Blogs} />
			<Route path='/recipes' component={Recipes} />
			<Route path='/blog/:slug' component={Blog} />
			<Route path='/recipe/:slug' component={Recipe} />
		</Switch>
	);
}