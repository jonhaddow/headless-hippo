import * as React from 'react';
import './header.css';

export default class Header extends React.Component<any, any> {
	render() {
		return (
		<header className="page-header">
			<a href={this.props.url}><h1>{this.props.title}</h1></a>
			<p>{this.props.description}</p>
		</header>
		);
	}
}