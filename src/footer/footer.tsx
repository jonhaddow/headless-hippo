import * as React from "react";

export default class Footer extends React.Component<any, any> {
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