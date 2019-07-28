import React from "react";
import Styles from './footer.scss';

interface FooterProps {
	title: string;
}

export default function(props: FooterProps): JSX.Element{
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const { title } = props;

	const copyrightMsg = `Copyright © ${year} ${title}`;
	return (
		<footer className={Styles.footer}>
			<p>{copyrightMsg}</p>
		</footer>
	);
}