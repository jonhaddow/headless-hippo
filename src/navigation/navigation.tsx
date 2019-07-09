import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Posts from '../posts/posts';
import Recipes from '../recipes/recipes';

interface SingleRoute {
	id: string;
	url: string;
	title: string;
	component: (() => JSX.Element)|typeof Component;
}

export default class Navigation extends Component<{}, {}> {
	public static getRoutes(): SingleRoute[] {
		return [{
			id: 'home',
			url: '/',
			title: 'Home',
			component: Home,
		}, {
			id: 'about',
			url: '/about',
			title: 'About',
			component: About,
		}, {
			id: 'posts',
			url: '/posts',
			title: 'Posts',
			component: Posts,
		}, {
			id: 'recipes',
			url: '/recipes',
			title: 'Recipes',
			component: Recipes,
		}];
	}

	public render(): JSX.Element {
		const routes = Navigation.getRoutes(); 

		const navEls = routes.map((route): JSX.Element => (
			<li key={route.id}>
				<NavLink to={route.url}>{route.title}</NavLink>
			</li>
		));

		const navRoutes = routes.map((route): JSX.Element => (
			<Route key={`${route.id}-route`} exact path={route.url} component={route.component} />
		));

		return (
			<BrowserRouter>
				<nav>
					<ul>
						{navEls}
					</ul>
				</nav>
				<Switch>
					{navRoutes}
				</Switch>
			</BrowserRouter>
		);
	}
}
