import React, { Component} from "react";
import './header.css';

export default class Header extends Component {
	render(){
		return(
			<header className="page-header">
				<a href={this.props.url}><h1>{this.props.title}</h1></a>
				<p>{this.props.description}</p>
			</header>
		);
	}
}