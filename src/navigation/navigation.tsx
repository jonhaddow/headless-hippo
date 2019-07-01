import * as React from 'react';
import {
	BrowserRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Posts from '../posts/posts';
import Recipes from '../recipes/recipes';

class SingleRoute {
	id: string;
	url: string;
	title: string;
	component: any;
}

export default class Navigation extends React.Component<any, any> {
	static getRoutes() : Array<SingleRoute> {
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

	render() {
		const routes = Navigation .getRoutes ( ); 

		const navEls = routes.map(x => (
			<li key={x.id}>
				<NavLink to={x.url}>{x.title}</NavLink>
			</li>
		));

		const navRoutes = routes.map(x => (
			<Route key={`${x.id}-route`} exact path={x.url} component={x.component} />
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
