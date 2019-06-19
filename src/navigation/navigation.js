import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Home from '../home/home';
import About from '../about/about';
import Posts from '../posts/posts';
import Recipes from '../recipes/recipes';
import ApiRequest, { URLS } from '../models/api_request';

export default class Navigation extends Component {
	constructor(props){
		super(props);

		this._initializeModel();

		this.state = {};
	}

	render(){
		let navItems = this.state.navItems

		if(!navItems) {
			return null;
		}

		let navEls = navItems.map(x => {
			return(
				<li key={x.id}>
					<NavLink to={x.url}>{x.title}</NavLink>
				</li>
			);
		});

		let navRoutes = navItems.map(x => {
			return(
				<Route key={x.id} path={x.url} component={x.component} />
			);
		});

		return(
			<Router>
				<nav>
					<ul>
						{navEls}
					</ul>
				</nav>
				<Switch>
					{navRoutes}
				</Switch>
			</Router>
		)
	}

	async _initializeModel(){
		let apiRequest = new ApiRequest();
		let response = await apiRequest.fetch(URLS.getNavMenu());

		if(!response instanceof Array) {
			throw new Error('Navigation response is not an array');
		}

		// todo: Handle extracting the base route to return an appropriate link.
		
		// todo: Handle mapping link to the correct component.

		let navItems = response.map(x => {
			return {
				id: x.ID,
				url: x.url,
				title: x.title,
				component: Home
			};
		});

		this.setState({ navItems: navItems })
	}
}