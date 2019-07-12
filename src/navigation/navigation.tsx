import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Routes from './routes';

export default function Navigation(): JSX.Element {
	const navEls = Routes.map((route): JSX.Element => {
		if (route.navLink == null) return;
		return (
			<li key={route.id}>
				<NavLink to={route.path}>{route.navLink.title}</NavLink>
			</li>
		);
	});

	const navRoutes = Routes.map((route): JSX.Element => (
		<Route 
			key={`${route.id}-route`} 
			exact={route.isExact}
			path={route.path} 
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
