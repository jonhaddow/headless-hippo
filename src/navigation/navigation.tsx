import React, { Component } from 'react';
import { RouteComponentProps, BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Posts, { PostType } from '../posts/posts';

interface SingleRoute {
	id: string;
	url: string;
	title: string;
	render: (routeProps: RouteComponentProps) => JSX.Element;
}

export default class Navigation extends Component<{}, {}> {
	public static getRoutes(): SingleRoute[] {
		return [{
			id: 'home',
			url: '/',
			title: 'Home',
			render: (): JSX.Element => <Home />
		}, {
			id: 'about',
			url: '/about',
			title: 'About',
			render: (): JSX.Element => <About />
		}, {
			id: 'posts',
			url: '/posts',
			title: 'Posts',
			render: (routeProps: RouteComponentProps): JSX.Element => {
				return (
					<Posts 
						{...routeProps}
						postType={PostType.Blog}
					/>
				);
			}
		}, {
			id: 'recipes',
			url: '/recipes',
			title: 'Recipes',
			render: (routeProps: RouteComponentProps): JSX.Element => {
				return (
					<Posts 
						{...routeProps}
						postType={PostType.Recipe}
					/>
				);
			}
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
			<Route 
				key={`${route.id}-route`} 
				exact
				path={route.url} 
				render={route.render}
			/>
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
