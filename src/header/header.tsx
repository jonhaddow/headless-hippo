import * as React from 'react';
import './header.css';

interface HeaderProps {
	url: string,
	title: string,
	description: string
};

export default class Header extends React.Component<HeaderProps, any> {
	render() {
		return (
		<header className="page-header">
			<a href={this.props.url}><h1>{this.props.title}</h1></a>
			<p>{this.props.description}</p>
		</header>
		);
	}
}