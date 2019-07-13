import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Posts, { PostType } from '../posts/posts';
import Post, { PostParams } from '../post/post';

interface NavLink {
	title: string;
}

interface Route {
	id: string;
	path: string;
	render: (routeProps: RouteComponentProps) => JSX.Element;
	isExact: boolean;
	navLink?: NavLink;
}

const Routes: Route[] = [{
	id: 'home',
	path: '/',
	render: (): JSX.Element => <Home />,
	isExact: true,
	navLink: {
		title: 'Home'
	}
}, {
	id: 'about',
	path: '/about',
	render: (): JSX.Element => <About />,
	isExact: false,
	navLink: {
		title: 'About'
	}
}, {
	id: 'blogs',
	path: '/blogs',
	render: (routeProps: RouteComponentProps): JSX.Element => {
		return (
			<Posts 
				{...routeProps}
				postType={PostType.Blog}
			/>
		);
	},
	isExact: false,
	navLink: {
		title: 'Blogs'
	}
}, {
	id: 'recipes',
	path: '/recipes',
	render: (routeProps: RouteComponentProps): JSX.Element => {
		return (
			<Posts 
				{...routeProps}
				postType={PostType.Recipe}
			/>
		);
	},
	isExact: false,
	navLink: {
		title: 'Recipes'
	}
}, {
	id: 'blog',
	path: '/blog/:slug',
	render: (routeProps: RouteComponentProps<PostParams>): JSX.Element => {
		return (
			<Post 
				{...routeProps}
			/>
		);
	},
	isExact: false
}];

export default Routes;