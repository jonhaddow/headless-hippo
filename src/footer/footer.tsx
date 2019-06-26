import * as React from "react";

interface FooterProps {
	title: string
};

export default class Footer extends React.Component<FooterProps, any> {
	render () {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		return(
			<footer>
				<p>Copyright &#169; {year} {this.props.title}</p>
			</footer>
		);
	}	
}