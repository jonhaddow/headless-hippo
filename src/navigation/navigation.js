import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Home from '../home/home';
import About from '../about/about';
import Posts from '../posts/posts';
import Recipes from '../recipes/recipes';

export default class Navigation extends Component {
	render(){
		return(
			<Router>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/posts">Posts</NavLink>
						</li>
						<li>
							<NavLink to="/recipes">Recipes</NavLink>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about/" component={About} />
					<Route path="/posts/" component={Posts} />
					<Route path="/recipes/" component={Recipes} />
				</Switch>
			</Router>
		)
	}
}